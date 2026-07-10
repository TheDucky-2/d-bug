
import BasicNavbar from "@/components/BasicNavbar";

const Error404 = () => {

  return (
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
    </style>
    
    <div className="h-screen min-w-0 w-full flex flex-1 flex-col dark:bg-black bg-white ">
    <BasicNavbar/>

      <div className="h-full flex flex-col w-full items-center justify-center flex-1 min-w-0 min-h-0">
        <div className="text-center flex flex-col gap-5 justify-center pb-10 max-w-4xl">
            <p className="text-6xl dark:text-zinc-200 text-zinc-800/80 text-center">
                4O4
            </p>
            <h2 className="text-8xl font-extrabold text-red-500">PAGE NOT FOUND!</h2>
        </div>
      </div>

    </div>
    </>
  );
};

export default Error404;