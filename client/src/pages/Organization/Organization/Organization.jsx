import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import OrganizationSidebar from "./OrganizationSidebar"
import OrganizationNavbar from "./OrganizationNavbar"
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import OrganizationMainContent from "../Organization/OrganizationMainContent"
import { useFetchCurrentOrganization } from "@/hooks/useOrganization";

const Organization = () => {
  const organization = useFetchCurrentOrganization()
  const [activePage, setActivePage] = useState("dashboard");


  if(organization.error){
    return (
      <p>Oops! Could not fetch current Organization.</p>
    )
  }

  if (organization.isPending) {
  return (
    <>
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
  
      * {
          font-family: "Inter";
      }
    `}
    </style>
    <div className="h-screen flex items-center justify-center gap-3">
      <LoaderCircle className="animate-spin"/>
      <span>Loading your workspace...</span>
    </div>
    </>
  );

  }
  return (
    <>
    <style>
    {`
    @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

    * {
        font-family: "Manrope", sans-serif;
    }
    `}
    </style>
    <SidebarProvider>
       <OrganizationSidebar setActivePage={setActivePage}/>
      <SidebarInset>
     
        <main className="flex flex-1 flex-col">
          <div className="px-2 pb-2">
          <OrganizationNavbar organizationLogo={organization.data.organization_logo_url}/>
          </div>

          <div className="flex-1 bg-zinc-200 dark:bg-zinc-800 rounded-xl mx-3 mb-3 min-h-screen px-5 py-5">
            <OrganizationMainContent organization={organization.data} activePage={activePage}/>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
    </>
  );
};

export default Organization;