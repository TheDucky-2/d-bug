
import { SidebarProvider } from "@/components/ui/sidebar.jsx";
import Navbar from "../components/Dashboard/Navbar.jsx"
import AppSidebar from "../components/Dashboard/AppSidebar.jsx"
import { useTheme } from "../context/ThemeContext.jsx";
import MainContent from "@/components/Dashboard/MainContent.jsx";
const Dashboard = () => {

    const {isDark} = useTheme();

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