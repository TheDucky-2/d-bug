import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "../../types/types";
import { Activity, ArrowUpRight,FolderGit2, Users } from "lucide-react";

const ActiveProjectsCard = () => {
  const mostActiveProject: Project = {
    id: 1,
    name: "Authentication Service",
    description: "Core authentication and authorization service.",
    owner: "Mia Chen",
    source: "GitHub",
    repository: "acme/authentication-service",
    members: 8,
    status: "Active",
    last_activity: "15 minutes ago",
    created_at: "2026-01-10",
  };

  return (
    <>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

    * {
        font-family: "Inter";
    }
    `}
    </style>
    <div className="grid-cols-2 grid gap-4">
    <Card className="rounded-sm border border-white/10 overflow-hidden">
  <CardHeader className="border-b border-border">
    <div className="flex items-center justify-between px-1">
      <CardTitle className="text-lg font-semibold">
        Most Active Project
      </CardTitle>

      <Activity className="h-5 w-5 text-muted-foreground" />
    </div>
  </CardHeader>

  <CardContent className="p-0">

    {/* Hero */}
    <div className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">
            {mostActiveProject.name}
          </h2>

          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {mostActiveProject.description}
          </p>
        </div>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-500">
          {mostActiveProject.status}
        </span>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 ">

      <div className="space-y-1 border-r border-border px-5 ">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          Owner
        </p>

        <p className="font-medium">
          {mostActiveProject.owner}
        </p>
      </div>

      <div className="space-y-1 p-5">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          Members
        </p>

        <p className="font-medium">
          {mostActiveProject.members}
        </p>
      </div>

      <div className="space-y-1 border-r border-t p-5">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          Source
        </p>

        <div className="flex items-center gap-2">
          <FolderGit2 className="h-4 w-4" />
          {mostActiveProject.source}
        </div>
      </div>

      <div className="space-y-1 border-t p-5">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          Last Activity
        </p>

        <p>{mostActiveProject.last_activity}</p>
      </div>

    </div>

    {/* Repository */}
    <div className="px-6 py-5">
      <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">
        Repository
      </p>

      <div className="rounded-md py-2 font-mono text-sm">
        {mostActiveProject.repository}
      </div>
    </div>

    {/* Footer */}
    <div className="border-t border-border p-4">
      <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90">
        View Project
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>

  </CardContent>
</Card>
    </div>
    </>
  );
};

export default ActiveProjectsCard;