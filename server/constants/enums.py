from enum import IntEnum, Enum

class ProjectStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    DELETED = "deleted"

class UserType(str, Enum):
    USER = "user"
    SUPER_ADMIN = "super_admin"

class MemberRole(str, Enum):
    OWNER = "owner"
    ADMIN = "admin"
    DEVELOPER = "developer"
    REVIEWER = "reviewer"

class OrganizationStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    
class Subscription(str, Enum):
    FREE = "free"
    PRO = "pro"

##bug classes

class Priority(IntEnum):
    P1 = 1
    P2 = 2
    P3 = 3
    P4 = 4
    P5 = 5

class Severity(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class BugStatus(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    IN_REVIEW = "in_review"
    RESOLVED = "resolved"
    REOPENED = "reopened"

class BugSource(str, Enum):
    MANUAL = "manual"
    GITHUB = "github"
    

## Invitation

class InviteStatus(str, Enum):
    ACCEPTED = "accepted"
    DENIED = "denied"
    PENDING = "pending"
