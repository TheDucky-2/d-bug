import BasicNavbar from "@/components/BasicNavbar"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import Welcome from "./Welcome.jsx";
import CreateOrganization from "./CreateOrganization.jsx";
import ConnectGithub from "./ConnectGithub.jsx";

const Onboarding = () => {
    let currentStep = 1
    const {isDark} = useTheme()
    const [step, setStep] = useState(currentStep)

  return (
    <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>
    <div className="flex flex-col bg-white dark:bg-black h-screen">
        <BasicNavbar/>
        <div className="flex-1 p-16 ">
        <div 
        className="flex-1 flex min-h-0 bg-zinc-200 dark:bg-zinc-900 shadow-zinc-700/60 shadow-md border  dark:border-zinc-200/20 rounded-xl h-full">
            
            {/**LEFT PANEL */}
            <div className="flex-col flex flex-1 border dark:border-r-zinc-700/60 border-r-zinc-700/20 rounded-l-xl justify-center text-center gap-8 p-10
            bg-linear-to-br from-zinc-100 via-stone-100 to-neutral-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">

                <div className="w-105 h-105 -translate-y-12">
                    <DotLottieReact 
                    src={isDark ? "https://lottie.host/76604ad7-bdbe-4117-9717-500ab836e3ac/6VKdROxrka.lottie": "https://lottie.host/c70faf7d-8973-4c47-bf60-7f62095537b0/nEUDW1sGk5.lottie"} loop autoplay/>
                </div>
                <div className="flex flex-col justify-center text-center items-center gap-6">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white/60">
                    Welcome to d_<span className=" dark:text-red-500 text-red-500">bug</span>.
                    </h1>

                    <p className="mt-4 max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400">
                    AI-powered bug triage built for engineering teams.
                    </p>
                </div>
            </div>

            {/**RIGHT PANEL */}
            <div className="flex-2 flex py-10 px-6 rounded-l-xl items-center justify-center h-full min-h-0 min-w-0 ">
                {console.log(step)}
                {step === 1 && <Welcome nextStep={() => setStep((prev) => prev+1)}/>}
                {step === 2 && <CreateOrganization nextStep={() => setStep((prev) => prev+1)}/>}
                {step === 3 && <ConnectGithub/>}

            </div>

        </div>
        </div>
    </div>
    </>
  )
}

export default Onboarding