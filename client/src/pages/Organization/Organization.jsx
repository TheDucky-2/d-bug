import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import OrganizationSidebar from "./OrganizationSidebar"
import OrganizationNavbar from "./OrganizationNavbar"
import { useEffect, useState } from "react";
import api from "@/config/axios";

/**
 * 
 * 
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
 */

const Organization = () => {

  const [currentOrganization, setCurrentOrganization] = useState(null);

  useEffect(()=> {

    const fetchOrganization = async () => {

      const organizationData = await api.get("/organizations/")

    }

    fetchOrganization()

  },[])





  return (
    <SidebarProvider>
       <OrganizationSidebar />
      <SidebarInset>
     
        <main className="flex flex-1 flex-col">
          <div className="px-2 pb-2">
          <OrganizationNavbar />
          </div>

          <div className="flex-1 bg-zinc-200 dark:bg-zinc-800 rounded-xl mx-3 mb-3 min-h-screen">

          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Organization;