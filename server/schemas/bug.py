from pydantic import BaseModel
from enums import Priority, BugStatus, Severity
from datetime import datetime

class BugCreate(BaseModel):
    title: str
    description: str | None
    screenshot: str|None
    priority: Priority
    severity: Severity


class BugResponse(BaseModel):
    
    bug_id:int
    title: str
    description: str
    status: BugStatus
    created_at: datetime
    assignee: str | None


class BugUpdate(BaseModel):

    assignee: str | None
    assigned_by: str|None
    priority: Priority
    severity: Severity
    status: BugStatus


