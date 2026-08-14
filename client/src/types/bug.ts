import { LucideIcon } from "lucide-react";

export interface BugSeverityConfig {

label: string;
icon: LucideIcon;
className: string
}

export interface BugStatusConfig {
    label: string
    className: string
}

export type BugStatus = 
    | "open"
    | "inProgress"
    | "underReview"
    | "reopened"
    | "resolved"

export type BugSeverity = 
    | "critical"
    | "high"
    | "medium"
    | "low"

export interface Bug {
    id: number;
    project_id: number;
    title: string;
    description?: string;
    stack_trace?: string;
    category: string;
    severity: string;
    priority: string;
    environment: string;
    steps_to_reproduce: string;
    screenshot?: string;
}

export type CreateBug = Omit<Bug, "id" | "project_id">
