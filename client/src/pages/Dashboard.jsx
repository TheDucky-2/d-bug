
import { SidebarProvider } from "@/components/ui/sidebar.jsx";
import Navbar from "./Dashboard/Navbar.jsx"
import AppSidebar from "./Dashboard/AppSidebar.jsx"
import { useTheme } from "../context/ThemeContext.jsx";
import MainContent from "@/pages/Dashboard/MainContent.jsx";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
const Dashboard = () => {

    const {isDark} = useTheme();
    const [loading, setLoading] = useState(false)
    
  if (loading) {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoaderCircle className="animate-spin"/>
    </div>
  );}

  return (

    <div className={`min-h-screen flex justify-between ${isDark? "bg-black text-white": "bg-white text-black"} mr-0`}>

      <div className="flex flex-col">

        <SidebarProvider>
          <AppSidebar/>
        </SidebarProvider>
      </div>
 
      <div className="flex flex-1 flex-col">
        <Navbar/>
        <section>
          <main>
            <MainContent/>
          </main>
        </section>
      </div>

  </div>

  )
}

export default Dashboard