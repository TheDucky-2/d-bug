from enum import IntEnum, Enum


class ProjectStatus(Enum):
    CREATED = "created"
    LIVE = "live"
    DELETED = "deleted"

class Role(str, Enum):
    ADMIN = "admin"
    DEVELOPER = "developer"
    REPORTER = "reporter"
    SUPER_ADMIN = "super_admin"

class OrganizationStatus(Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    
class Subscription(Enum):
    FREE = "free"
    PRO = "pro"

##bug classes

class Priority(IntEnum):
    P1 = 1
    P2 = 2
    P3 = 3
    P4 = 4
    P5 = 5

class Severity(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class BugStatus(Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    IN_REVIEW = "in_review"
    RESOLVED = "resolved"
    

