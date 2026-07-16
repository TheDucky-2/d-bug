
```
                                D_BUG

                         High-Level Architecture

                              ┌──────────────┐
                              │    Users     │
                              ├──────────────┤
                              │ SUPER_ADMIN  │
                              │ USER         │
                              └──────┬───────┘
                                     │
                               HTTPS Requests
                                     │
                                     ▼
┌──────────────────────────────────────────────────────────────────────┐
│                        React Frontend                               │
│──────────────────────────────────────────────────────────────────────│
│ • Authentication                                                    │
│ • Protected Routes                                                  │
│ • Dashboard                                                         │
│ • Organization Management                                           │
│ • Project Management                                                │
│ • Bug Tracking                                                      │
│ • Member Management                                                 │
└─────────────────────────────┬────────────────────────────────────────┘
                              │
                         Axios API Client
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│                         FastAPI Backend                             │
│──────────────────────────────────────────────────────────────────────│
│ Authentication                                                      │
│ ├── JWT / Cookies                                                   │
│ └── validate_user()                                                 │
│                                                                     │
│ Authorization                                                       │
│ ├── User Type                                                       │
│ │     • SUPER_ADMIN                                                 │
│ │     • USER                                                        │
│ │                                                                   │
│ └── Member Roles (Organization)                                     │
│       • OWNER                                                       │
│       • ADMIN                                                       │
│       • DEVELOPER                                                   │
│       • REVIEWER                                                    │
│                                                                     │
│ Routers                                                             │
│ ├── Auth                                                            │
│ ├── Organization                                                    │
│ ├── Project                                                         │
│ ├── Bug                                                             │
│ ├── Members                                                         │
│ └── Roles & Permissions                                             │
│                                                                     │
│ Business Services                                                   │
│ ├── OrganizationService                                             │
│ ├── ProjectService                                                  │
│ ├── BugService                                                      │
│ └── RBAC Service                                                    │
└───────────────┬───────────────────────────────┬──────────────────────┘
                │                               │
                ▼                               ▼
      ┌────────────────────┐         ┌────────────────────────┐
      │       Redis        │         │      PostgreSQL        │
      │────────────────────│         │────────────────────────│
      │ Cached Permissions │         │ Users                  │
      │ Cached Roles       │         │ Organizations          │
      │ Organization Info  │         │ Members               │
      │ Project Metadata   │         │ Projects              │
      │ User Sessions      │         │ Bugs                  │
      └────────────────────┘         │ Comments              │
                                     │ Roles                │
                                     │ Permissions          │
                                     └──────────┬───────────┘
                                                │
                                                ▼
                                         SQLAlchemy ORM

                              ▲
                              │
                 ┌────────────┴─────────────┐
                 ▼                          ▼
          Image Upload Service         Logging
```