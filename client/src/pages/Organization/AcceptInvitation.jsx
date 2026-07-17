import { useSearchParams } from "react-router-dom";
import { CheckCircle, CircleX } from "lucide-react";
import logo from "../../assets/d_bug.png"
import { useState } from "react";

export default function AcceptInvitation() {
  const [searchParams] = useSearchParams();

  const [organization, setOrganization] = useState("d_bug")
  const [role, setRole] = useState("Developer")
  const token = searchParams.get("token");

  return (
    <>
    <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>
    <div className="min-h-screen bg-gray-500 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-900 rounded-md shadow-xl p-8 ">

        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
        <img src={logo} className="h-10 "/>
        </div>


        <h1 className="text-xl font-bold text-center text-white-900">
          You're invited. 🎉
        </h1>


        <p className="text-center text-sm text-white/60 mt-2">
          Join a workspace and start collaborating with your team.
        </p>


        {/* Invite Card */}
        <div className="mt-6 bg-zinc-800 rounded-sm p-5">

          <div className="flex items-center gap-3 mb-4">

            <div>
              <p className="text-sm text-gray-500">
                Organization
              </p>

              <p className="font-semibold">
                {organization}
              </p>
            </div>
          </div>



            <p className="text-sm text-gray-500">
              Assigned role
            </p>

            <p className="font-semibold">
              {role}
            </p>


        </div>

        <div className="flex flex-col">
        {/* Accept Button */}
        <button
          className="
            mt-6
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            py-3
            rounded-md
            font-medium
            transition
          "
        >
          <CheckCircle size={20} />

          Accept Invitation
        </button>



        {/* Accept Button */}
        <button
          className="
            mt-2
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-red-500
            hover:bg-red-600
            text-black
            py-3
            rounded-md
            font-medium
            transition
          "
        >
          <CircleX size={20} />

          Deny
        </button>
        </div>


        <p className="text-xs text-gray-400 text-center mt-5">
          This invitation expires in 7 days.
        </p>


      </div>

    </div>
    </>
  );
}