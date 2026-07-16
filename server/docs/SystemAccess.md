```
                          BUG TRIAGE PLATFORM
                 System Access & Authorization Architecture

                                      Users
                                        │
                ┌───────────────────────┴────────────────────────┐
                │                                                │
                ▼                                                ▼
        SUPER_ADMIN                                          USER
                │                                                │
      Platform-wide access                           Organization Member
                │                                                │
                │                                    Belongs to Organization?
                │                                                │
                │                                     ┌──────────┴──────────┐
                │                                     │                     │
                │                                    No                    Yes
                │                                     │                     │
                │                          Create / Join Organization       |
                                                                            ▼
                │                                           Member Role Assignment
                │                                                     │
                │                         ┌─────────────────────────────┼────────────────────────────┐
                │                         │             │               │                            │
                ▼                         ▼             ▼               ▼                            ▼
                                      OWNER         ADMIN         DEVELOPER                   REVIEWER
                                            │           │               │                            │
                                            └───────────┴───────────────┴────────────────────────────┘
                                                                │
                                                                ▼
                                                     Permission Validation
                                                                │
                                                                ▼
                                                      Business Services
                                                                │
                                                                ▼
                                                         API Response

```

Permissions Hierarchy

SUPER_ADMIN (UserType: SUPER_ADMIN)
│
├── User Management
│   ├── Create Users
│   ├── Delete Users
│   ├── View Users
│   └── Suspend Users
│
├── Organization Management
│   ├── View All Organizations
│   ├── Delete Organization
│   ├── Update Organization
│   └── View Statistics
│
├── Project Management
│   ├── View All Projects
│   ├── Delete Projects
│   └── Manage Projects
│
└── Permission Management
    ├── Create Roles
    ├── Update Roles
    ├── Delete Roles
    └── Manage Permissions


OWNER

│
├── Organization
│   ├── Update Organization
│   ├── Delete Organization
│   ├── Invite Members
│   ├── Remove Members
│   └── Transfer Ownership
│
├── Roles
│   ├── Assign Roles
│   ├── Remove Roles
│   └── Update Permissions
│
├── Projects
│   ├── Create
│   ├── Update
│   └── Delete
│   
│
└── Bugs
    ├── Full Access
    ├── Assign
    ├── Close
    └── Delete


ADMIN
│
├── Organization
│   ├── View
│   ├── Update
│   ├── Invite Members
│   └── Remove Members
│
├── Projects
│   ├── Create
│   ├── Update
│   ├── Delete
│   └── Manage Members
│
└── Bugs
    ├── Create
    ├── Update
    ├── Assign
    ├── Close
    └── Delete

DEVELOPER
│
├── Projects
│   ├── View
│   └── Join Assigned Projects
│
└── Bugs
    ├── View
    ├── Update Status
    ├── Comment
    ├── Resolve
    └── Upload Attachments

REVIEWER
│
├── Projects
│   └── View
│
└── Bugs
    ├── View
    ├── Verify Resolution
    ├── Reopen
    ├── Comment
    └── Approve Closure