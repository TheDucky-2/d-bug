import {
  Zap,
  Brain,
  Tags,
  Filter,
  Users,
  BarChart3,
} from "lucide-react";

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
    color: "bg-red-500",
    textcolor: "text-red-400"
  },
  {
    severityType: "High",
    color: "bg-orange-500",
    textcolor: "text-orange-500",
  },
  {
    severityType: "Medium",
    color: "bg-yellow-500",
    textcolor: "text-yellow-500"
  },
  {
    severityType: "Low",
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
    status: "Reopened",
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
  {title: "Team",
   url: "team",
  },
  {title: "Inbox",
   url: "inbox"
  },
  {title: "Bugs",
   url: "bugs"
  },
  {title: "Projects",
   url: "projects"
  },
  {title: "Reports",
   url: "reports"
  }
]

export const emails = [
  {
    id: "EMAIL-1001",
    from: "Sarah Patel",
    email: "sarah.patel@acmecorp.com",
    subject: "Critical: Users are being logged out immediately after signing in",
    preview: "We've received multiple reports that users are being logged out immediately after login.",
    body: "Hi team,\n\nWe've received multiple reports from customers that they are being logged out immediately after a successful login.\n\nThis appears to have started after yesterday's deployment. It affects both Chrome and Firefox.\n\nCan someone investigate? This is blocking users from accessing their accounts.\n\nThanks,\nSarah",
    project: "Authentication Service",
    severity: "critical",
    unread: true,
    starred: true,
    received: "10m ago"
  },
  {
    id: "EMAIL-1002",
    from: "QA Automation",
    email: "qa@company.dev",
    subject: "Regression detected in Payment Gateway retries",
    preview: "Duplicate payment captures detected during overnight regression testing.",
    body: "Our overnight regression suite detected duplicate payment captures when retrying failed transactions.\n\nEnvironment: Production-like staging.\n\nObserved:\n- First attempt times out\n- User retries payment\n- Both transactions are captured successfully\n\nThis looks like a high priority issue.",
    project: "Payment Gateway",
    severity: "critical",
    unread: true,
    starred: false,
    received: "25m ago"
  },
  {
    id: "EMAIL-1003",
    from: "Michael Torres",
    email: "michael.torres@enterprise.io",
    subject: "Customer Portal crashes after page refresh",
    preview: "Refreshing the Profile page consistently crashes the application.",
    body: "Hello,\n\nSeveral enterprise customers reported that refreshing the Profile page causes the application to crash.\n\nSteps:\n1. Login\n2. Navigate to Profile\n3. Refresh browser\n\nExpected: Profile reloads normally.\nActual: Application crashes.\n\nThanks.",
    project: "Customer Portal",
    severity: "high",
    unread: true,
    starred: false,
    received: "1h ago"
  },
  {
    id: "EMAIL-1004",
    from: "Emily Ross",
    email: "support@company.dev",
    subject: "Password reset emails never arrive",
    preview: "Support tickets regarding password reset failures have increased today.",
    body: "Hi,\n\nSupport tickets regarding password resets have increased significantly today.\n\nUsers complete the reset flow successfully, but no email is received.\n\nWe've checked spam folders with no success.\n\nCould engineering investigate?",
    project: "Authentication Service",
    severity: "high",
    unread: false,
    starred: false,
    received: "2h ago"
  },
  {
    id: "EMAIL-1005",
    from: "Platform Monitoring",
    email: "alerts@company.dev",
    subject: "HTTP 500 spike on Refund API",
    preview: "Automated monitoring detected increased HTTP 500 responses.",
    body: "Automated Alert\n\nRefund endpoint error rate exceeded threshold.\n\nCurrent Status:\n- Endpoint: /api/refunds\n- HTTP 500 responses increasing\n- Started approximately 40 minutes ago\n\nImmediate investigation recommended.",
    project: "Payment Gateway",
    severity: "high",
    unread: true,
    starred: true,
    received: "40m ago"
  },
  {
    id: "EMAIL-1006",
    from: "Ava Moore",
    email: "ava.moore@company.dev",
    subject: "Android app frozen on splash screen",
    preview: "Multiple Android devices are stuck on the splash screen after the latest release.",
    body: "Morning team,\n\nI'm seeing reports that the Android application gets stuck on the splash screen after the latest release.\n\nIssue reproduced on:\n- Pixel 8\n- Samsung S24\n\nUsers cannot proceed beyond startup.",
    project: "Mobile App",
    severity: "critical",
    unread: true,
    starred: true,
    received: "55m ago"
  },
  {
    id: "EMAIL-1007",
    from: "Security Team",
    email: "security@company.dev",
    subject: "Admin permissions appear to be ignored",
    preview: "Security validation found administrator permissions are not enforced consistently.",
    body: "During our routine security validation we noticed administrator role restrictions are not being enforced consistently.\n\nA user without elevated permissions was able to access administrative actions.\n\nPlease treat this as urgent.",
    project: "Admin Dashboard",
    severity: "critical",
    unread: true,
    starred: true,
    received: "1h ago"
  },
  {
    id: "EMAIL-1008",
    from: "Warehouse Operations",
    email: "warehouse@company.dev",
    subject: "Inventory sync producing negative stock",
    preview: "Several products now display negative inventory after today's sync.",
    body: "Hi,\n\nAfter running today's warehouse synchronization, several products now display negative inventory counts.\n\nThis is preventing order fulfillment.\n\nExample SKUs have been attached to the internal ticket.\n\nThanks.",
    project: "Inventory API",
    severity: "high",
    unread: false,
    starred: false,
    received: "3h ago"
  },
  {
    id: "EMAIL-1009",
    from: "Analytics Team",
    email: "analytics@company.dev",
    subject: "Revenue dashboard totals don't match finance reports",
    preview: "Finance identified discrepancies in dashboard revenue totals.",
    body: "Hi Engineering,\n\nThe revenue dashboard appears to be calculating totals incorrectly.\n\nFinance compared yesterday's exports against our internal reports and there are noticeable discrepancies.\n\nCould someone review the aggregation logic?",
    project: "Analytics Platform",
    severity: "medium",
    unread: true,
    starred: false,
    received: "5h ago"
  },
  {
    id: "EMAIL-1010",
    from: "Customer Success",
    email: "success@company.dev",
    subject: "Dashboard charts failing to load for multiple customers",
    preview: "Customers report blank dashboards immediately after login.",
    body: "Hi,\n\nCustomer Success has escalated several reports that dashboard charts remain blank after login.\n\nThe rest of the application appears functional.\n\nCan someone investigate whether this is frontend or API related?",
    project: "Admin Dashboard",
    severity: "medium",
    unread: false,
    starred: false,
    received: "6h ago"
  },
  {
    id: "EMAIL-1011",
    from: "Notification Service Monitor",
    email: "monitoring@company.dev",
    subject: "Email notifications being delivered twice",
    preview: "Duplicate notification events detected by automated monitoring.",
    body: "Automated Monitoring Alert\n\nWe've detected duplicate notification events for email deliveries.\n\nCurrent observations:\n- Same notification ID processed twice\n- Issue appears intermittent\n- Queue latency remains normal",
    project: "Notification Service",
    severity: "low",
    unread: false,
    starred: false,
    received: "1d ago"
  },
  {
    id: "EMAIL-1012",
    from: "Product Management",
    email: "pm@company.dev",
    subject: "Analytics PDF exports failing",
    preview: "Premium customer unable to export reports as PDF.",
    body: "Hi team,\n\nA premium customer reported that exporting analytics reports as PDF consistently fails.\n\nCSV export continues to work normally.\n\nThis feature is important for their monthly reporting workflow.\n\nPlease prioritize when possible.",
    project: "Analytics Platform",
    severity: "high",
    unread: true,
    starred: false,
    received: "7h ago"
  }
];

export const features = [
  {
    icon: Zap,
    title: "Instant triage",
    description:
      "New bug reports are analyzed as soon as they're submitted, giving developers an immediate overview without manual review.",
  },
  {
    icon: Brain,
    title: "AI severity prediction",
    description:
      "Uses AI to estimate the severity of each bug based on its description, reproduction steps, and reported impact.",
  },
  {
    icon: Tags,
    title: "Automatic categorization",
    description:
      "Classifies bugs into categories like UI, Backend, Authentication, Performance, or Database to simplify organization.",
  },
  {
    icon: Filter,
    title: "Priority suggestions",
    description:
      "Recommends which issues should be addressed first by considering severity, frequency, and business impact.",
  },
  {
    icon: Users,
    title: "Developer recommendations",
    description:
      "Suggests the most suitable team or developer based on the bug category and predefined ownership rules.",
  },
  {
    icon: BarChart3,
    title: "Bug insights",
    description:
      "Visualizes bug trends, severity distribution, and category breakdowns to help teams monitor project health.",
  },
];

export const organizations = [
  {
    id: "ORG-1001",
    name: "Acme Corporation",
    slug: "acme-corp",
    logo: "AC",
    owner: "Sarah Patel",
    plan: "Enterprise",
    members: 124,
    repositories: 18,
    projects: 8,
    openBugs: 34,
    resolvedBugs: 542,
    criticalBugs: 5,
    activeDevelopers: 76,
    createdAt: "2025-08-12",
    status: "Active",
  },
  {
    id: "ORG-1002",
    name: "Nova Labs",
    slug: "nova-labs",
    logo: "NL",
    owner: "Michael Torres",
    plan: "Business",
    members: 58,
    repositories: 11,
    projects: 5,
    openBugs: 21,
    resolvedBugs: 319,
    criticalBugs: 2,
    activeDevelopers: 35,
    createdAt: "2025-10-04",
    status: "Active",
  },
  {
    id: "ORG-1003",
    name: "Vertex Systems",
    slug: "vertex-systems",
    logo: "VS",
    owner: "Emma Wilson",
    plan: "Enterprise",
    members: 182,
    repositories: 27,
    projects: 14,
    openBugs: 67,
    resolvedBugs: 1286,
    criticalBugs: 8,
    activeDevelopers: 118,
    createdAt: "2024-11-20",
    status: "Active",
  },
  {
    id: "ORG-1004",
    name: "CloudPeak",
    slug: "cloudpeak",
    logo: "CP",
    owner: "James Carter",
    plan: "Business",
    members: 79,
    repositories: 15,
    projects: 6,
    openBugs: 29,
    resolvedBugs: 471,
    criticalBugs: 3,
    activeDevelopers: 49,
    createdAt: "2025-04-08",
    status: "Active",
  },
  {
    id: "ORG-1005",
    name: "Blue Ocean Retail",
    slug: "blue-ocean-retail",
    logo: "BO",
    owner: "Sophia Lee",
    plan: "Pro",
    members: 41,
    repositories: 8,
    projects: 4,
    openBugs: 18,
    resolvedBugs: 237,
    criticalBugs: 1,
    activeDevelopers: 22,
    createdAt: "2025-12-01",
    status: "Active",
  },
  {
    id: "ORG-1006",
    name: "Atlas Mobility",
    slug: "atlas-mobility",
    logo: "AM",
    owner: "Olivia Davis",
    plan: "Enterprise",
    members: 136,
    repositories: 22,
    projects: 10,
    openBugs: 49,
    resolvedBugs: 892,
    criticalBugs: 6,
    activeDevelopers: 83,
    createdAt: "2024-09-16",
    status: "Active",
  },
  {
    id: "ORG-1007",
    name: "Pixel Forge",
    slug: "pixel-forge",
    logo: "PF",
    owner: "Ethan Miller",
    plan: "Pro",
    members: 27,
    repositories: 5,
    projects: 3,
    openBugs: 14,
    resolvedBugs: 166,
    criticalBugs: 1,
    activeDevelopers: 16,
    createdAt: "2026-01-14",
    status: "Trial",
  },
  {
    id: "ORG-1008",
    name: "Green Energy Solutions",
    slug: "green-energy-solutions",
    logo: "GE",
    owner: "Grace Kim",
    plan: "Business",
    members: 64,
    repositories: 13,
    projects: 7,
    openBugs: 26,
    resolvedBugs: 403,
    criticalBugs: 2,
    activeDevelopers: 39,
    createdAt: "2025-06-19",
    status: "Active",
  },
  {
    id: "ORG-1009",
    name: "Quantum AI",
    slug: "quantum-ai",
    logo: "QA",
    owner: "Daniel White",
    plan: "Enterprise",
    members: 205,
    repositories: 30,
    projects: 16,
    openBugs: 73,
    resolvedBugs: 1547,
    criticalBugs: 9,
    activeDevelopers: 138,
    createdAt: "2024-12-10",
    status: "Active",
  },
  {
    id: "ORG-1010",
    name: "Skyline Technologies",
    slug: "skyline-technologies",
    logo: "ST",
    owner: "Lucas Hall",
    plan: "Free",
    members: 14,
    repositories: 3,
    projects: 2,
    openBugs: 7,
    resolvedBugs: 54,
    criticalBugs: 0,
    activeDevelopers: 8,
    createdAt: "2026-03-22",
    status: "Active",
  },
];

export const roles = [
  {
    value: "admin",
    title: "Organization Admin",
    description:
      "Manage members, repositories, projects, and organization settings.",
  },
  {
    value: "developer",
    title: "Developer",
    description:
      "Work on assigned bugs, update statuses, and collaborate with your team.",
  },
  {
    value: "reporter",
    title: "Reporter",
    description:
      "Create bug reports, upload evidence, and track reported issues.",
  },
];

export const bugCategories = [
  "UI / UX",
  "Frontend",
  "Backend",
  "API",
  "Database",
  "Authentication",
  "Performance",
  "Security",
  "Mobile",
  "Integration",
  "Infrastructure",
  "Other"
];

export const bugPriority = [
  "P1",
  "P2",
  "P3",
  "P4",
  "P5"
]

export const Environment = [
  "Production",
  "Development"
]

export const projectTypes = [
  {
    id: "web_app",
    name: "Web Application",
    description: "Websites, SaaS platforms, dashboards, and web tools"
  },
  {
    id: "mobile_app",
    name: "Mobile Application",
    description: "iOS, Android, and cross-platform mobile apps"
  },
  {
    id: "desktop_app",
    name: "Desktop Application",
    description: "Windows, macOS, and Linux applications"
  },
  {
    id: "backend_api",
    name: "Backend / API",
    description: "APIs, servers, microservices, and backend systems"
  },
  {
    id: "frontend_library",
    name: "Frontend Library / Framework",
    description: "UI libraries, components, and frontend frameworks"
  },
  {
    id: "package_library",
    name: "Library / Package",
    description: "Reusable packages, SDKs, and open-source libraries"
  },
  {
    id: "cli_tool",
    name: "CLI Tool",
    description: "Command-line applications and developer tools"
  },
  {
    id: "game",
    name: "Game",
    description: "Games, game engines, and interactive experiences"
  },
  {
    id: "ai_ml",
    name: "AI / Machine Learning",
    description: "AI models, ML systems, and intelligent applications"
  },
  {
    id: "data_science",
    name: "Data Science",
    description: "Analytics, data processing, and visualization projects"
  },
  {
    id: "data_pipeline",
    name: "Data Pipeline",
    description: "ETL systems, workflows, and data infrastructure"
  },
  {
    id: "devops",
    name: "DevOps / Infrastructure",
    description: "Cloud infrastructure, CI/CD, and deployment systems"
  },
  {
    id: "security",
    name: "Security Tool",
    description: "Security software, audits, and vulnerability tools"
  },
  {
    id: "blockchain",
    name: "Blockchain / Web3",
    description: "Smart contracts, crypto, and decentralized applications"
  },
  {
    id: "iot",
    name: "IoT / Hardware",
    description: "Connected devices and hardware-integrated projects"
  },
  {
    id: "embedded",
    name: "Embedded System",
    description: "Firmware and low-level hardware software"
  },
  {
    id: "browser_extension",
    name: "Browser Extension",
    description: "Chrome, Firefox, and browser add-ons"
  },
  {
    id: "automation",
    name: "Automation Tool",
    description: "Scripts, bots, and workflow automation"
  },
  {
    id: "documentation",
    name: "Documentation",
    description: "Documentation websites and knowledge bases"
  },
  {
    id: "research",
    name: "Research Project",
    description: "Experiments, prototypes, and studies"
  },
  {
    id: "education",
    name: "Educational Project",
    description: "Learning platforms and educational tools"
  },
  {
    id: "enterprise",
    name: "Enterprise Software",
    description: "Business applications and internal systems"
  },
  {
    id: "other",
    name: "Other",
    description: "Any project that does not fit above categories"
  }
]