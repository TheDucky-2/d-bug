import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Pricing from "./pages/Pricing.jsx";
import Inbox from "./pages/Inbox.jsx"
import Bugs from "./pages/Bugs.jsx"
import Repositories from "./pages/Repositories.jsx"
import Reports from "./pages/Reports.jsx"
import Settings from "./pages/Settings.jsx"
import Overview from "./pages/Overview.jsx"
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/bugs" element={<Bugs/>}/>
        <Route path="/repositories" element={<Repositories/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/overview" element={<Overview/>}/>
      </Routes>
      

    </div>
  )
}

export default App