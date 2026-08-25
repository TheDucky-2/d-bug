import { useContext, createContext, useState } from "react";
import { type TeamContextType, type Team } from "@/types/team";
import api from "@/config/axios";
import { CreateTeam } from "@/types/team";


const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({children} : {children: React.ReactNode}) => {

    const [team, setTeam] = useState<Team | null>(null)

    /* FUNCTION FOR CREATING A NEW TEAM */

    const createTeam = async (newTeam: CreateTeam): Promise<Team> => {

        if(!newTeam.name.trim()) return;

        const data: Record<string, string> = {
            team_name: newTeam.name.trim()
        };

        if(newTeam.teamDescription){
            data.team_description = newTeam.teamDescription.trim()
        }

        const res = await api.post("/teams", data)

        console.log(res)

        return res.data;}

    /* FUNCTION FOR FETCHING ALL TEAMS */

    const fetchAllTeams = async() => {

        const res = await api.get("/teams")

        return res.data;
    }

    return (
        <TeamContext.Provider value={{team, setTeam, createTeam, fetchAllTeams}}>
            {children}
        </TeamContext.Provider>
    )

}


export const useTeam = () => {

   const context = useContext(TeamContext)

   if(!context){
    throw new Error("Team Context must be used inside a Team Provider")
   }

   return context;
}

