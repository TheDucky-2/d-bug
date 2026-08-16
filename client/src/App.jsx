import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.tsx";
import DashboardInbox from "./pages/Organization/Organization/DashboardInbox.jsx"
import Bugs from "./pages/Bugs/Bugs.jsx"
import Repositories from "./pages/Organization/Project/Repositories.jsx"
import Reports from "./pages/Reports/Reports.jsx"
import Settings from "./pages/Settings.jsx"
import Login from "./pages/Auth/Login.jsx";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register.jsx";
import Profile from "./pages/Organization/Organization/Profile/Profile.tsx";
import Organization from "./pages/Organization/Organization/Organization.jsx";
import Onboarding from "./pages/Onboarding/Onboarding.jsx";
import Error404 from "./pages/Error404.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import ResetPassword from "./pages/Auth/ResetPassword.js";

const App = () => {
  return (
    <div>
      <Routes>

        {/* UNPROTECTED ROUTES */}
        
          <Route path="/" element={<Home/>}/>
          <Route path="/auth/sign-up" element={<Register/>}/>
          <Route path="/auth/sign-in" element={<Login/>}/>
          <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/auth/reset-password/:token" element = {<ResetPassword/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="*" element={<Error404/>}/>

        {/* PROTECTED ROUTES */}


          <Route path="/inbox" element={<DashboardInbox/>}/>
          <Route path="/bugs" element={<Bugs/>}/>
          <Route path="/repositories" element={<Repositories/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/organization" element={<Organization/>}/>
          <Route path="/onboarding" element={<Onboarding/>}/>


        
      </Routes>
    </div>
  )
}

export default App