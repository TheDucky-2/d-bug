import Navbar from "../components/Navbar.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {

  const {isDark} = useTheme()

  return (
    <>
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
    <Navbar/>
    </div>
    <Footer/>
    </>
  )
}

export default Home