# Contributing to d_bug

Thank you for your interest in contributing to **d_bug**! 🚀

d_bug is an AI-powered bug triage platform built to explore how LLMs can improve bug management workflows. 

It combines a React frontend with a FastAPI backend to provide organization-based bug management, project tracking and AI-assisted workflows.

Contributions are welcome, whether they are bug fixes, improvements, documentation updates or new features.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Backend Development](#backend-development)
- [Frontend Development](#frontend-development)
- [Branch Guidelines](#branch-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

# Getting Started

## Prerequisites

Before contributing, make sure you have:

- Git
- Python 3.10+
- Node.js 18+
- npm
- PostgreSQL database access

# Clone the Repository

```bash
git clone https://github.com/your-username/d_bug.git

cd d_bug
```

# Project Structure

The project is divided into a React frontend and FastAPI backend.

```
d_bug/
│
├── assets/
│   └── Project screenshots and images
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── config/
│   │   └── lib/
│   │
│   └── package.json
│
├── server/
│   │
│   ├── app/
│   │   └── main.py
│   │
│   ├── auth/
│   │   └── Authentication logic
│   │
│   ├── config/
│   │   └── Database configuration
│   │
│   ├── models/
        ├── auth/
             └── RefreshToken.py
│   │   ├── User.py
│   │   ├── Organization.py
│   │   ├── Project.py
│   │   └── Bug.py
│   │
│   ├── routes/
│   │   ├── auth_router.py
│   │   ├── user_router.py
│   │   ├── org_router.py
│   │   ├── project_router.py
│   │   └── bug_router.py
│   │
│   ├── schemas/
│   │   ├── user.py
│   │   ├── organization.py
│   │   ├── project.py
│   │   └── bug.py
│   │
│   ├── utils/
│   │   ├── jwt_token.py
│   │   └── image_upload.py    # imagekit.io, image cloud provider logic
│   │
│   └── requirements.txt
│
└── README.md
```

# Development Setup

## Backend Setup

Navigate to the server directory:

```bash
cd server
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

### Windows

```bash
venv\Scripts\activate
```

### Linux/macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_secret_key
```

Run the backend:

```bash
uvicorn app.main:app --reload
```

# Frontend Setup

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

# Backend Contribution Guidelines

When adding backend features:

## Routes

API endpoints should be added inside:

```
server/routes/
```

Examples:

```
bug_router.py
project_router.py
org_router.py
```

## Database Models

Database models belong in:

```
server/models/
```

Examples:

```
User.py
Organization.py
Project.py
Bug.py
auth.RefreshToken.py
```


## Validation Schemas

Request and response validation should be handled using Pydantic schemas:

```
server/schemas/
```


## Authentication

Authentication-related changes should be placed in:

```
server/auth/
server/utils/jwt_token.py
```

Do not expose sensitive authentication information or secrets.

# Frontend Contribution Guidelines

Frontend code lives inside:

```
client/src/
```

Important directories:

```
components/
Reusable UI components

pages/
Application pages

context/
Global state management

hooks/
Reusable React hooks

config/
Application configuration

lib/
Helper utilities
```

Try to keep components reusable and avoid unnecessary duplication.

# Branch Guidelines

Create a separate branch for every contribution.

## Features

```
feature/<feature-name>
```

Example:

```
feature/github-integration
```

## Bug Fixes

```
fix/<bug-name>
```

Example:

```
fix/bug-status-update
```

## Documentation

```
docs/<change-name>
```

Example:

```
docs/update-contributing
```

# Commit Guidelines

Use clear and meaningful commit messages.

Recommended format:

```
type: description
```

Examples:

```
feat: add project invitation system

fix: resolve bug status update issue

docs: update contributing guide

refactor: simplify authentication logic
```

Commit types:

| Type | Usage |
|---|---|
| feat | New features |
| fix | Bug fixes |
| docs | Documentation |
| refactor | Code improvements |
| test | Tests |
| chore | Maintenance |



# Pull Request Guidelines

Before opening a pull request:

- Make sure the application runs locally
- Test your changes
- Keep commits clean
- Update documentation if required
- Avoid unrelated changes

A pull request should include:

## Description

Explain:

- What changed
- Why it was needed
- How it was implemented

Example:

```
## Changes

- Added bug filtering by severity
- Updated bug API endpoint
- Added frontend filter component

## Testing

Tested locally with existing projects and bugs.
```

# Reporting Bugs

If you find a problem, create an issue with:

## Description

Explain what happened.

## Steps to reproduce

Example:

```
1. Login into an organization
2. Open bug dashboard
3. Update bug status
```

## Expected behavior

Describe what should happen.

## Actual behavior

Describe what happened instead.

Include screenshots or logs if possible.


# Feature Requests

Feature ideas are welcome.

When suggesting a feature, include:

- Problem it solves
- Expected behavior
- Possible implementation approach

Potential future improvements:

- AI-powered bug categorization
- Duplicate bug detection
- GitHub issue synchronization
- Advanced analytics
- Automated bug prioritization


Thank you for contributing to **d_bug**! 🚀