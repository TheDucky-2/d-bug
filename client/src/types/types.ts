import { ReactElement } from "react";
import type { LucideIcon } from "lucide-react";

export type UpdateMemberDialogProps = {
    openTrigger : ReactElement
}

export type UpdateMemberForm = {
    status: string;
    role: string;
}

/**
 * export const memberStats = [
  {
    title: "Total Members",
    value: "14",
    description: "Organization members",
    icon: Users,
  },
  {
    title: "Active Members",
    value: "12",
    description: "Currently active",
    icon: UserCheck,
  },
  {
    title: "Pending Invites",
    value: "2",
    description: "Awaiting acceptance",
    icon: MailPlus,
  },
  {
    title: "Admins",
    value: "4",
    description: "Administrative members",
    icon: ShieldCheck,
  },
];
 */

export type MemberStatsProps = {
    title: string
    value: number
    description: string
    icon : LucideIcon

}