import Navbar from "../components/Navbar.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import Footer from "../components/Footer.jsx";
import dashboard from "/images/home_page.png"
import dashboard_light from "/images/home_light.png"
import { ArrowRight,Play} from 'lucide-react';
import { features } from "@/assets/assets.js";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const {isDark} = useTheme()
  const navigate = useNavigate()

  const handleSignUpClick = (()=> {
    navigate("/auth/sign-up")
  })

  return (
    <>
    <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>
    <div className={`min-h-screen ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black"}`}>
      <header>
        <nav>
          <Navbar/>
        </nav>
      </header>

      <main>
        {/** Top */}
        <section className={`justify-center items-center border-b 
          flex flex-col bg-grid min-h-screen ${isDark ? "bg-zinc-900  border-white/10" : "bg-zinc-100  border-black/10"}`} >
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-center gap-y-6 mt-10">

              <button className={`flex items-center gap-2 rounded-full px-3 py-2 cursor-pointer border-[0.5px]
                ${isDark ? "bg-black/70  text-white hover:bg-zinc-800/70 border-white/30" : "bg-zinc-100 text-black border-black/30 hover:bg-zinc-300/70"}`}>

                <div className="w-2 h-2 bg-red-600 rounded-full">
                </div>
                Now with AI-powered severity scoring
                <ArrowRight size={16}/>
              </button>

              <div  className="flex flex-col items-center justify-center gap-y-6 mb-4">
                <h1 className={`text-3xl md:text-5xl lg:text-7xl font-bold max-w-4xl text-center ${isDark ? "text-white" : " text-black"}`}>Stop drowning in 
                <span className={` ${isDark ? "text-white/50" : " text-zinc-700/50"}`}> unresolved bugs.</span></h1>

                <p className={`text-md md:text-md lg:text-md font-medium max-w-[43ch] ${isDark ? "text-white" : " text-black"}`}>
                  D_bug automatically prioritizes, assigns and tracks bugs so your engineering team ships faster — not slower.
                </p>
              </div>
              
              <div className="flex gap-4 mb-5 flex-wrap justify-center">
                <button onClick={handleSignUpClick}
                className={`flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer border-[0.5px] font-medium
                ${isDark ? "bg-white  text-black hover:bg-zinc-300 border-white/30" : "bg-black text-white border-white/30 hover:bg-zinc-800/80"}`}> 
                Start for free
                <ArrowRight size={16}/>
                </button>

                <button  className={`flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer border-[0.5px] font-medium
                ${isDark ? "bg-black  text-white hover:bg-zinc-800/70 border-white/30" : "bg-white text-black border-black/30 hover:bg-zinc-300/80"}`}>
                <Play size={16}/> Watch Demo 
                </button>
              </div>

            </div>
              
            <div className="flex mb-15 justify-center px-auto">
              <p className={`text-md md:text-md lg:text-md font-medium max-w-[43ch] ${isDark ? "text-zinc-500" : " text-zinc-500"}`}
              >No credit card required- 30 day free trial.</p>
            </div>

            <div className="justify-center flex flex-1 rounded-xl w-full overflow-hidden border-[0.5px] border-white/10 mb-20 mx-auto max-w-5xl shadow-zinc-600/20 shadow-xl">
              <img src={isDark? dashboard : dashboard_light} className="w-full rounded-xl object-cover h-auto block shadow-md"/>
            </div>
          </div>

        </section>

        {/** How it works */}
        <section className={`justify-center items-center border-b border-white/10 flex flex-col min-h-screen ${isDark ? "bg-zinc-900" : "bg-zinc-100"}`} >
          <div className="flex flex-col w-full max-w-7xl max-auto ">
            <div className="flex flex-col items-start lg:px-16 md:px-10 py-20 w-full">
              <div className="flex flex-col gap-5 mb-10">
                <p className="text-red-700 font-semibold"> HOW IT WORKS</p>
                <h2 className={`text-3xl md:text-5xl lg:text-7xl font-bold leading-tight ${isDark ? "text-white" : " text-black"}`}>
                  Everything your team <br></br>needs to resolve bugs faster.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-5">
                {features.map((feature) => {
                  return (
                <div key={feature.title} className={`items-start justify-center flex-col w-full flex gap-x-10 py-10`}>
                  <div className={`border p-2 rounded-md ${isDark? "border-white/10" : "border-black/30"}`}>
                    <feature.icon/>
                  </div>
                    <h3 className={`py-4 font-semibold ${isDark? "text-white" : "text-black"}`}>
                      {feature.title}
                    </h3>
                    <p className={`font-light max-w-[30ch] ${isDark? "text-white" : "text-black"}`}>
                      {feature.description}
                    </p>
                </div>
                  )
                })}
  

              </div>


            </div>
          </div>
          
        </section>

        {/** Integrations */}
        
        {/* Social proof/** */}   

        
      </main>
    </div>
    <section>
      <Footer/>
    </section>
    </>
  )
}

export default Home