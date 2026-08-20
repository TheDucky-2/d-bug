import { Link } from "react-router-dom";
import { ArrowLeft, Home, } from "lucide-react";

const Error404 = () => {
  return (
    <>

    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <p className="text-8xl md:text-9xl font-black tracking-tight text-red-600">
            404
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Page not found
          </h1>

          <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
            Sorry, the page you're looking for doesn't exist, was moved or the
            URL might be incorrect.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/"
              className="dashboard-black-white-button rounded-full"
            >
              <Home size={22}/>
              Go Home
            </Link>

            <button
              onClick={() => history.back()}
              className="dashboard-round-button bg-blue-800 text-white dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 "
            >
              <ArrowLeft size={22}/>
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