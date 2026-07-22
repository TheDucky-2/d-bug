# Permissions-based Role-Based Access Control (RBAC)

## Overview

Role-Based Access Control (RBAC) is a security model used in **d_bug** to control what actions users can perform based on their assigned roles.

Instead of giving permissions directly to users, permissions are assigned to roles and users receive roles through their organization membership.

The RBAC flow is:

```
User → Organization Membership → Role → Permissions → Access
```

Example:

```
Kshitij
   |
   └── Member of D-Bug Organization
            |
            └── Owner Role
                    |
                    |   PERMISSIONS
                    |
                    ├── organization:self:read
                    ├── organization:self:delete
                    ├── invitation:any:create
                    └── project:any:create
```

## RBAC Components

### 1. User

A user represents an account in the system.

Users do not directly have permissions.

Example:

```
User
- user_id
- email
- password
- user_type
```

A user gains access through membership of an organization.


### 2. Organization

An organization represents a workspace where users collaborate.

Each organization has:

* Members
* Roles
* Projects
* Permissions

Example:

```
Organization: D-Bug

Members:

- Kshitij → Owner
- Alice   → Admin
- Bob     → Developer
- Charlie → Reviewer
```

## 3. Member

A membership connects a user with an organization.

The member record stores the user's role inside the organization.

Relationship:

```
User
 |
 |
Member
 |
 |
Organization
```

Example:

```
Member
{
    user_id: 10,
    organization_id: 5,
    role_id: 1
}
```


## 4. Role

A role is a collection of permissions.

Roles define what actions a member can perform.

Current roles:

| Role      | Purpose                       |
| --------- | ----------------------------- |
| OWNER     | Full organization control     |
| ADMIN     | Manage organization resources |
| DEVELOPER | Create and modify projects    |
| REVIEWER  | Review bugs and changes       |


## Role Hierarchy

```
OWNER
 |
ADMIN
 |
DEVELOPER
 |
REVIEWER
```

Roles higher in the heirarchy generally have more permissions.


## Permissions

Permissions represent individual actions.

**Format:**

```
resource:scope:action
```

Example:

```
organization:self:read
```

Meaning:

* Resource: organization
* Scope: current user's organization
* Action: read/get details

---

### Permission Examples

#### Organization Permissions

| Permission               | Description                     |
| ------------------------ | ------------------------------- |
| organization:self:read   | View organization details       |
| organization:self:update | Update organization information |
| organization:self:delete | Delete organization             |

#### Invitation Permissions

| Permission            | Description                  |
| --------------------- | ---------------------------- |
| invitation:any:create | Invite users to organization |
| invitation:self:read  | View own invitations         |

#### Project Permissions

| Permission          | Description           |
| ------------------- | --------------------- |
| project:any:create  | Create projects       |
| project:self:update | Update owned projects |
| project:self:delete | Delete projects       |


## Role Permission Mapping

Example:

### Owner

```
OWNER

✓ organization:self:read
✓ organization:self:update
✓ organization:self:delete
✓ invitation:any:create
✓ project:any:create
✓ project:any:delete
```

### Admin

```
ADMIN

✓ organization:self:read
✓ organization:self:update
✓ invitation:any:create
✓ project:any:create
```

### Developer

```
DEVELOPER

✓ organization:self:read
✓ project:any:create
✓ project:self:update
```

### Reviewer

```
REVIEWER

✓ organization:self:read
✓ bug:self:read
✓ bug:self:update
```


## Authorization Flow

When a user tries to access a protected endpoint:

```
Request
   |
   |
Authentication (JWT)
   |
   |
Identify User
   |
   |
Find Organization Membership
   |
   |
Get User Role
   |
   |
Get Role Permissions
   |
   |
Check Required Permission
   |
   |
Allow / Reject Request
```


## Example

Endpoint:

```
DELETE /organization
```

Required permission:

```
organization:self:delete
```

Flow:

1. User sends request.
2. Authentication verifies the user.
3. System finds user's organization membership.
4. System retrieves the user's role.
5. System checks role permissions.
6. If permission exists:

```
Request Allowed
```

Otherwise:

```
403 Forbidden
```


## Permission Checking Implementation

Protected routes use permission dependencies.

Example:

```python
@router.delete("/organization")
def delete_organization(
    _ = Depends(AuthorizationService.require_permission("organization:self:delete"))
      ):

    return organization_service.delete_organization(current_organization)
```

The endpoint does not manually check roles.

The authorization service handles it.


## Permission Storage

Database relationship:

```
Role
 |
 |
RolePermission
 |
 |
Permission
```

### Tables:

### roles

```
role_id
role_name
```

Example:

```
1 | OWNER
2 | ADMIN
3 | DEVELOPER
```


### permissions

```
permission_id
permission
```

Example:

```
1 | organization:self:read
2 | organization:self:delete
```

### role_permissions

Connects roles and permissions.

Example:

```
role_id | permission_id

1       | 1
1       | 2
2       | 1
```



## Redis Role Cache

To reduce database queries, user roles can be cached.

Cache format:

```
auth:user:{user_id}:role
```

Example:

```
auth:user:15:role

{
    "role_id": 1,
    "role": "OWNER"
}
```

Cache expiration:

```
1 hour
```

## Security Benefits

RBAC provides:

* Centralized access control
* Easier permission management
* Reduced security mistakes
* Scalable user management
* Clear separation between authentication and authorization


## Future Improvements

Possible improvements:

* Organization-specific custom roles
* Permission groups
* Audit logs for permission changes
* Temporary roles
* Role inheritance
* Admin permission management UI

---

## Summary

The RBAC system ensures that users only perform actions allowed by their organization role.

The complete authorization chain is:

```
User
 ↓
Organization Member
 ↓
Role
 ↓
Permissions
 ↓
API Access
```

This keeps access management simple, scalable and secure.
