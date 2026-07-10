import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Pricing from "./pages/Pricing.jsx";
import DashboardInbox from "./pages/DashboardInbox.jsx"
import Bugs from "./pages/Bugs.jsx"
import Repositories from "./pages/Repositories.jsx"
import Reports from "./pages/Reports.jsx"
import Settings from "./pages/Settings.jsx"
import Overview from "./pages/Overview.jsx"
import Login from "./pages/Auth/Login.jsx";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Organization from "./pages/Organization/Organization.jsx";
import Onboarding from "./pages/Onboarding/Onboarding.jsx";
import Error404 from "./pages/Error404.jsx";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/inbox" element={<DashboardInbox/>}/>
        <Route path="/bugs" element={<Bugs/>}/>
        <Route path="/repositories" element={<Repositories/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/auth/sign-in" element={<Login/>}/>
        <Route path="/auth/sign-up" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/organization" element={<Organization/>}/>
        <Route path="/onboarding" element={<Onboarding/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  )
}

export default App