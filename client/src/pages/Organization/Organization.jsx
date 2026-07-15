import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import OrganizationSidebar from "./OrganizationSidebar"
import OrganizationNavbar from "./OrganizationNavbar"
import { useEffect, useState } from "react";
import api from "@/config/axios";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import OrganizationMainContent from "./OrganizationMainContent";

const Organization = () => {

  const [currentOrganization, setCurrentOrganization] = useState(null);
  const [loading, setLoading] = useState(false)
  const [activePage, setActivePage] = useState("dashboard");


  useEffect(()=> {

    const fetchOrganization = async () => {

      try{
      setLoading(true)
        
      const organizationData = await api.get("/organizations/me")

      setCurrentOrganization(organizationData.data)
      console.log(organizationData.data)

      toast.success("Organization loaded successfully")
      
    }catch(error){
      toast.error(error?.response?.data?.detail || error?.response?.data?.message) 

    }finally{
      setLoading(false)
    }

    }

    fetchOrganization()

  }, [])


  if (loading) {
  return (
    <>
    <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>
    <div className="h-screen flex items-center justify-center gap-3">
      <LoaderCircle className="animate-spin"/>
      <span>Loading your workspace...</span>
    </div>
    </>
  );

  }
  return (
        <>
    <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>
    <SidebarProvider>
       <OrganizationSidebar setActivePage={setActivePage}/>
      <SidebarInset>
     
        <main className="flex flex-1 flex-col">
          <div className="px-2 pb-2">
          <OrganizationNavbar organizationLogo={currentOrganization?.organization_logo_url}/>
          </div>

          <div className="flex-1 bg-zinc-200 dark:bg-zinc-800 rounded-xl mx-3 mb-3 min-h-screen px-5 py-5">
            <OrganizationMainContent organization={currentOrganization}/>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
    </>
  );
};

export default Organization;