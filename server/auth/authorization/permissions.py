from constants.enums import MemberRole

ROLE_PERMISSIONS = {
    MemberRole.OWNER.value: [
        # Organization
        "organization:self:read",
        "organization:self:update",
        "organization:self:delete",

        # Members
        "member:any:read",
        "member:any:invite",
        "member:any:update",
        "member:any:remove",

        # Roles
        "role:any:read",
        "role:any:assign",

        # Projects
        "project:any:create",
        "project:any:read",
        "project:any:update",
        "project:any:delete",
        "project:any:restore",

        # Project Members
        "project_member:any:add",
        "project_member:any:remove",
        "project_member:any:update",
        "project_member:any:view",

        # Bugs
        "bug:any:create",
        "bug:any:read",
        "bug:any:update",
        "bug:any:delete",
        "bug:any:assign",
        "bug:any:close",
        "bug:any:reopen",
        "bug:any:verify",

        # Comments
        "bug_comment:self:create",
        "bug_comment:self:update",
        "bug_comment:self:delete",
        "bug_comment:any:read",

        # Attachments
        "attachment:self:upload",
        "attachment:self:delete",
        "attachment:any:read",

        # Invitations
        "invitation:any:create",
        "invitation:any:read",
        "invitation:any:cancel",

        # Dashboard
        "dashboard:self:read",

        # Notifications
        "notification:self:read",
        "notification:self:update",
        "notification:self:delete",

        # Activity
        "activity:any:read",
    ],

    MemberRole.ADMIN.value: [
        "organization:self:read",
        "organization:self:update",

        "member:any:read",
        "member:any:invite",
        "member:any:update",
        "member:any:remove",

        "project:any:create",
        "project:any:read",
        "project:any:update",
        "project:any:delete",

        "project_member:any:add",
        "project_member:any:remove",
        "project_member:any:update",
        "project_member:any:view",

        "bug:any:create",
        "bug:any:read",
        "bug:any:update",
        "bug:any:assign",
        "bug:any:close",
        "bug:any:verify",

        "bug_comment:self:create",
        "bug_comment:self:update",
        "bug_comment:self:delete",
        "bug_comment:any:read",

        "attachment:self:upload",
        "attachment:self:delete",
        "attachment:any:read",

        "invitation:any:create",
        "invitation:any:read",
        "invitation:any:cancel",

        "dashboard:self:read",

        "notification:self:read",
        "notification:self:update",

        "activity:any:read",
    ],

    MemberRole.DEVELOPER.value: [
        "organization:self:read",

        "member:self:read",

        "project:any:read",

        "project_member:any:view",

        "bug:any:read",
        "bug:any:update",

        "bug_comment:self:create",
        "bug_comment:self:update",
        "bug_comment:any:read",

        "attachment:self:upload",
        "attachment:any:read",

        "dashboard:self:read",

        "notification:self:read",
        "notification:self:update",
    ],

    MemberRole.REVIEWER.value: [
        "organization:self:read",

        "member:self:read",

        "project:any:read",

        "project_member:any:view",

        "bug:any:read",
        "bug:any:verify",
        "bug:any:reopen",

        "bug_comment:self:create",
        "bug_comment:any:read",

        "attachment:any:read",

        "dashboard:self:read",

        "notification:self:read",
    ]
}