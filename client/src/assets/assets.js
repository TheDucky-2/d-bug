

export const topProjects = [
  {
    id: 1,
    name: "Authentication Service",
    bugs: 34,
  },
  {
    id: 2,
    name: "Customer Portal",
    bugs: 27,
  },
  {
    id: 3,
    name: "Payment Gateway",
    bugs: 21,
  },
  {
    id: 4,
    name: "Admin Dashboard",
    bugs: 18,
  },
  {
    id: 5,
    name: "Inventory API",
    bugs: 15,
  },
  {
    id: 6,
    name: "Mobile App",
    bugs: 13,
  },
  {
    id: 7,
    name: "Notification Service",
    bugs: 10,
  },
  {
    id: 8,
    name: "Analytics Platform",
    bugs: 8,
  },
];

export const bugSeverity = [
  {
    severityType: "Critical",
    count: 5,
    percentage: 10,
    color: "bg-red-500",
    textcolor: "text-red-400"
  },
  {
    severityType: "High",
    count: 12,
    percentage: 24,
    color: "bg-orange-500",
    textcolor: "text-orange-500",
  },
  {
    severityType: "Medium",
    count: 20,
    percentage: 40,
    color: "bg-yellow-500",
    textcolor: "text-yellow-500"
  },
  {
    severityType: "Low",
    count: 13,
    percentage: 26,
    color: "bg-blue-500",
    textcolor: "text-blue-500"
  },
];

export const bugs = [
  {
    id: "BUG-3001",
    title: "JWT token expires immediately after login",
    project: "Authentication Service",
    severity: "critical",
    status: "Open",
    assignee: "Mia Chen",
    avatar: "MC",
    priority: 1,
    created: "2026-06-25",
    updated: "2h ago",
    tags: ["authentication", "jwt"],
  },
  {
    id: "BUG-3002",
    title: "Password reset email not delivered",
    project: "Authentication Service",
    severity: "high",
    status: "In Progress",
    assignee: "Liam Scott",
    avatar: "LS",
    priority: 2,
    created: "2026-06-24",
    updated: "5h ago",
    tags: ["email", "auth"],
  },
  {
    id: "BUG-3003",
    title: "Customer profile page crashes on refresh",
    project: "Customer Portal",
    severity: "high",
    status: "Open",
    assignee: "Emma Wilson",
    avatar: "EW",
    priority: 2,
    created: "2026-06-23",
    updated: "1d ago",
    tags: ["frontend", "profile"],
  },
  {
    id: "BUG-3004",
    title: "Search filters reset after navigation",
    project: "Customer Portal",
    severity: "medium",
    status: "Resolved",
    assignee: "Noah Brown",
    avatar: "NB",
    priority: 3,
    created: "2026-06-18",
    updated: "3d ago",
    tags: ["search", "ui"],
  },
  {
    id: "BUG-3005",
    title: "Duplicate payment captured during retry",
    project: "Payment Gateway",
    severity: "critical",
    status: "Open",
    assignee: "Sophia Lee",
    avatar: "SL",
    priority: 1,
    created: "2026-06-26",
    updated: "30m ago",
    tags: ["payments", "transactions"],
  },
  {
    id: "BUG-3006",
    title: "Refund request returns HTTP 500",
    project: "Payment Gateway",
    severity: "high",
    status: "In Progress",
    assignee: "James Carter",
    avatar: "JC",
    priority: 2,
    created: "2026-06-22",
    updated: "4h ago",
    tags: ["refund", "api"],
  },
  {
    id: "BUG-3007",
    title: "Dashboard charts fail to load",
    project: "Admin Dashboard",
    severity: "medium",
    status: "Open",
    assignee: "Olivia Davis",
    avatar: "OD",
    priority: 3,
    created: "2026-06-21",
    updated: "6h ago",
    tags: ["charts", "dashboard"],
  },
  {
    id: "BUG-3008",
    title: "Admin role permissions ignored",
    project: "Admin Dashboard",
    severity: "critical",
    status: "In Review",
    assignee: "Ethan Miller",
    avatar: "EM",
    priority: 1,
    created: "2026-06-27",
    updated: "1h ago",
    tags: ["roles", "security"],
  },
  {
    id: "BUG-3009",
    title: "Inventory count becomes negative after sync",
    project: "Inventory API",
    severity: "high",
    status: "Open",
    assignee: "Grace Kim",
    avatar: "GK",
    priority: 2,
    created: "2026-06-20",
    updated: "8h ago",
    tags: ["inventory", "sync"],
  },
  {
    id: "BUG-3010",
    title: "Barcode lookup response exceeds timeout",
    project: "Inventory API",
    severity: "low",
    status: "Resolved",
    assignee: "Lucas Hall",
    avatar: "LH",
    priority: 4,
    created: "2026-06-15",
    updated: "5d ago",
    tags: ["barcode", "performance"],
  },
  {
    id: "BUG-3011",
    title: "App freezes on splash screen",
    project: "Mobile App",
    severity: "critical",
    status: "Open",
    assignee: "Ava Moore",
    avatar: "AM",
    priority: 1,
    created: "2026-06-28",
    updated: "45m ago",
    tags: ["android", "startup"],
  },
  {
    id: "BUG-3012",
    title: "Push notifications delayed by several minutes",
    project: "Notification Service",
    severity: "medium",
    status: "In Progress",
    assignee: "Henry Walker",
    avatar: "HW",
    priority: 3,
    created: "2026-06-24",
    updated: "3h ago",
    tags: ["notifications", "queue"],
  },
  {
    id: "BUG-3013",
    title: "Email notifications sent twice",
    project: "Notification Service",
    severity: "low",
    status: "Open",
    assignee: "Ella Young",
    avatar: "EY",
    priority: 4,
    created: "2026-06-19",
    updated: "2d ago",
    tags: ["email", "duplicate"],
  },
  {
    id: "BUG-3014",
    title: "Analytics report export fails as PDF",
    project: "Analytics Platform",
    severity: "high",
    status: "Open",
    assignee: "Daniel White",
    avatar: "DW",
    priority: 2,
    created: "2026-06-23",
    updated: "7h ago",
    tags: ["reports", "export"],
  },
  {
    id: "BUG-3015",
    title: "Revenue graph displays incorrect totals",
    project: "Analytics Platform",
    severity: "medium",
    status: "Open",
    assignee: "Unassigned",
    avatar: "U",
    priority: 3,
    created: "2026-06-29",
    updated: "1m ago",
    tags: ["analytics", "charts"],
  },
];

export const columns = [
    {
        accessorKey : "id",
        header: "ID"
    },
    {
        accessorKey : "title",
        header: "TITLE"
    },
    {
        accessorKey : "project",
        header: "PROJECT"
    },
        {
        accessorKey : "severity",
        header: "SEVERITY"
    },
        {
        accessorKey : "status",
        header: "STATUS"
    },
        {
        accessorKey : "assignee",
        header: "ASSIGNEE"
    },
        {
        accessorKey : "updated",
        header: "UPDATED"
    }
  
  ]

export const bugTrend = [
  { day: "Mon", Opened: 12, resolved: 8 },
  { day: "Tue", Opened: 15, resolved: 10 },
  { day: "Wed", Opened: 10, resolved: 12 },
  { day: "Thu", Opened: 18, resolved: 11 },
  { day: "Fri", Opened: 14, resolved: 15 },
  { day: "Sat", Opened: 9, resolved: 13 },
  { day: "Sun", Opened: 11, resolved: 16 },
];

export const chartConfig = {
    day: {
      label: "Day",
      color: "000000"
    }
    ,
    Opened: {
      label: "Opened",
      color: "#1D4ED8"
    },
    resolved: {
      label: "Resolved",
      color: "#22c55e",
    }

  }


export const sidebarMenuItems = [
  {title: "Overview",
   url: "/overview",
  },
  {title: "Inbox",
   url: "/inbox"
  },
  {title: "Bugs",
   url: "/bugs"
  },
  {title: "Repositories",
   url: "/repositories"
  },
  {title: "Reports",
   url: "/reports"
  }
]