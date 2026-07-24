from pydantic import BaseModel
from constants.enums import Priority, BugStatus, Severity
from datetime import datetime

class BugCreate(BaseModel):
    title: str
    description: str 
    screenshot: str|None = None
    priority: Priority
    severity: Severity
    stack_trace: str | None = None


class BugResponse(BaseModel):
    
    bug_id:int
    title: str
    description: str
    status: BugStatus
    assignee: str | None
    severity: Severity
    priority: Priority
    created_at: datetime


class BugUpdate(BaseModel):

    assignee: str | None
    assigned_by: str|None
    priority: Priority
    severity: Severity
    status: BugStatus


