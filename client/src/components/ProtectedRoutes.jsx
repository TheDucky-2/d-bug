import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";


const ProtectedRoutes = () => {

    const {user} = useAuth()

    if(!user){
        toast.error("User not found")
    }

  return (
    user ? <Outlet/> : <Navigate to="/"/>
  )
}

export default ProtectedRoutes