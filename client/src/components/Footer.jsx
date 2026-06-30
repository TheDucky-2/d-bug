import {useTheme} from "../context/ThemeContext.jsx";
import { Link } from "react-router-dom";
import logo from "../assets/d_bug.png";
import logo_black from "../assets/d_bug_black.png";

const Footer = () => {

    const {isDark} = useTheme()

  return (
    <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
        `}</style>
        <footer className={`${isDark ? "bg-black text-white/60" : "bg-white text-black/60"} py-12 px-4 sm:px-6 lg:px-8 max-w-full`}>
            <div className='w-full max-w-7xl mx-auto'>
        
                <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
        
                    <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                        <Link to="/">
                            <img src={isDark ? logo : logo_black} className="h-12"/>
                        </Link>
                        <div className='w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/25 to-black'></div>
                        <p className='text-sm mt-6 max-w-sm leading-relaxed'>
                            d_bug is an AI-powered GitHub bug triage. <br/>Prioritize smarter, resolve faster.

                        </p>
                    </div>
        
                    <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className='text-sm font-medium'>Important Links</h3>
                        <div className="flex flex-col gap-2 mt-6">
                            <a href="#" className='text-sm  transition-colors'>Home</a>
                            <a href="#" className='text-sm transition-colors'>About</a>
                            <a href="#" className='text-sm transition-colors'>Portfolio</a>
                            <a href="#" className='text-sm transition-colors'>Contact</a>
                            <a href="#" className='text-sm  transition-colors'>FAQ</a>
                        </div>
                    </div>
        
                    <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className='text-sm  font-medium'>Social Links</h3>
                        <div className="flex flex-col gap-2 mt-6">
                            <a href="#" className='text-sm  transition-colors'>Twitter</a>
                            <a href="#" className='text-sm transition-colors'>Instagram</a>
                            <a href="#" className='text-sm transition-colors'>Youtube</a>
                            <a href="#" className='text-sm transition-colors'>Linkedin</a>
                        </div>
                    </div>
        
                </div>
        
                <div className='w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black'></div>
        
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className='text-xs'>© 2026 D_bug</p>
                    <div className="flex items-center gap-6">
                        <a href='#' className='text-xs  transition-colors'>Terms & Conditions</a>
                        <div className='w-px h-4 bg-white/20'></div>
                        <a href='#' className='text-xs transition-colors'>Privacy Policy</a>
                    </div>
                </div>
            </div>
            </footer>
        </>
  )
}

export default Footer
