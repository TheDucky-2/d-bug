import { useTheme } from "@/context/ThemeContext";
import AddMemberDialog from "./AddMemberDialog.jsx";
import { Plus, ShieldUser } from "lucide-react";
import { useAuth } from "@/context/AuthContext.jsx";
import MemberMainContent from "./MemberMainContent.js";
import { useState } from "react";
import EmptyMembers from "./EmptyMembers.js";
import { useGetMembers } from "@/hooks/useMembers.js";

const Members = () => {

  const {isDark} = useTheme()
  const {user} = useAuth()

  const getMembers = useGetMembers()

  if(!getMembers){
    return (
      <EmptyMembers/>
    )
  }
  
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-semibold">
          Members
          </h1>

        </div>

        <div className="gap-4 flex items-center">

          <AddMemberDialog openTrigger={
            <button className={`bg-yellow-500 px-4 py-2 font-medium hover:bg-yellow-600 flex items-center cursor-pointer `}>
              <span className="text-sm text-black">Add Member</span>
              <Plus className="ml-2 h-4 w-4 text-black"/>
            </button>}>
          </AddMemberDialog>

        </div>

      </div>

      <div>
       <MemberMainContent/>
      </div>
    </div>
  )
}

export default Members