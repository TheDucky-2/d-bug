import { useTheme } from "@/context/ThemeContext"
import Navbar from "./Navbar";

const HeroSection = () => {

    const {isDark} = useTheme();

  return (
    <div className={`${isDark ? "bg-zinc-900" : "bg-zinc-100"}`}>
        <Navbar/>
    </div>
  )
}

export default HeroSection