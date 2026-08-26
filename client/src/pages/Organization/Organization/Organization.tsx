import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import OrganizationSidebar from "./OrganizationSidebar"
import OrganizationNavbar from "./OrganizationNavbar"
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import OrganizationMainContent from "./OrganizationMainContent"
import { useFetchCurrentOrganization } from "@/hooks/useOrganization";

const Organization = () => {
  const organization = useFetchCurrentOrganization()
  const [activePage, setActivePage] = useState<string>("dashboard");


  if(organization.error){
    return (
      <p>Oops! Could not fetch your Organization.</p>
    )
  }

  if (organization.isPending) {
  return (
    <>

    <div className="min-h-screen bg-dashboard-container flex items-center justify-center gap-3">
      <LoaderCircle className="animate-spin"/>
      <span>Loading your workspace...</span>
    </div>
    </>
  );

  }
  return (
    <>
    <SidebarProvider>
       <OrganizationSidebar setActivePage={setActivePage}/>
      <SidebarInset>
        <main className="flex flex-1 flex-col">
          <OrganizationNavbar organizationLogo={organization.data.organizationLogo}/>

          <div className="flex-1 bg-dashboard-container 
           min-h-screen py-(--padding-vertical-md) px-(--padding-horizontal-lg)">
            <OrganizationMainContent organization={organization.data} activePage={activePage}/>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
    </>
  );
};

export default Organization;