![logo](../../client/src/assets/d_bug.png)

# Permission Based Access Control(RBAC)

## Overview

d_bug implements a database-backed, fine-grained Role-Based Access Control (RBAC) system for managing authorization across organizations, projects, bugs and collaboration workflows.

The system separates:

- **Authentication** → Who is the user?
- **Authorization** → What actions can the user perform?

Each user belongs to an organization through a membership record. 

Every member is assigned a role and each role is mapped to a set of permissions.

Before executing protected actions, the backend validates whether the user's assigned role contains the required permission.

If permission validation fails, the API returns: ``403 Forbidden``

### Architecture

```
                          ┌──────────────────────┐
                          │       User           │
                          ├──────────────────────┤
                          │ user_id             │
                          │ email               │
                          │ password            │
                          │ organization_id FK  │
                          └──────────┬──────────┘
                                     │
                                     │ Many Users
                                     ▼
                          ┌──────────────────────┐
                          │    Organization      │
                          ├──────────────────────┤
                          │ organization_id      │
                          │ owner_user_id FK     │
                          │ name                 │
                          └──────────┬───────────┘
                                     │
                      One Organization has many
                                     │
                                     ▼
                          ┌──────────────────────┐
                          │      Member          │
                          ├──────────────────────┤
                          │ member_id            │
                          │ user_id FK           │
                          │ role_id FK           │
                          │ is_active            │
                          └──────────┬───────────┘
                                     │
                                     ▼
                          ┌──────────────────────┐
                          │ OrganizationRole     │
                          ├──────────────────────┤
                          │ role_id              │
                          │ organization_id FK   │
                          │ role_name            │
                          └──────────┬───────────┘
                                     │
                              Many-to-Many
                                     │
                                     ▼
                          ┌──────────────────────┐
                          │  RolePermission      │
                          ├──────────────────────┤
                          │ role_id FK           │
                          │ permission_id FK     │
                          └──────────┬───────────┘
                                     │
                                     ▼
                          ┌──────────────────────┐
                          │     Permission       │
                          ├──────────────────────┤
                          │ permission_id        │
                          │ permission_name      │
                          └──────────────────────┘
```

## RBAC Access Flow Diagram

### Overview

Every protected API endpoint in the application follows a standardized authorization flow based on **Role-Based Access Control (RBAC)**.

The purpose of this flow is to ensure that:

- Only authenticated users can access protected resources.
- Users are authorized based on the permissions assigned to their role.
- Unauthorized requests are rejected with the appropriate HTTP status code.

```

          API Request
               |
               ▼
        Validate JWT
               |
               ▼
      Extract User Identity
               |
               ▼
      Find Organization Member
               |
               ▼
        Get Assigned Role
               |
               ▼
    Fetch Role Permissions
               |
               ▼
  Check Required Permission
               |
      ┌────────┴────────┐
      │                 │
   Allowed           Denied
      │                 │
      ▼                 ▼
    Execute       403 Forbidden
```


# Why This Model

The permission-based design provides:

- Fine-grained authorization
- Separation between roles and capabilities
- Easier permission changes
- Better security boundaries
- Support for future custom roles
- Resource-level access control

The architecture allows d_bug to scale from simple team collaboration into a production-ready engineering platform with advanced permission management.