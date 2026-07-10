import { Link } from "react-router-dom";
import BasicNavbar from "@/components/BasicNavbar";

const Error404 = () => {
  return (
    <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <BasicNavbar />

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <p className="text-8xl md:text-9xl font-black tracking-tight text-red-500">
            404
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Page not found
          </h1>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Sorry, the page you're looking for doesn't exist, was moved or the
            URL might be incorrect.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-600"
            >
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 py-3 font-medium text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Error404;