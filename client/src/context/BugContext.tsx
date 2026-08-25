import { Bug, BugContextType, CreateBug } from "@/types/bug";
import React, { createContext, useContext, useState } from "react";
import api from "@/config/axios";

const BugContext = createContext<BugContextType | undefined>(undefined)

export const BugProvider = ({children}: {children: React.ReactNode}) => {

    const [bug, setBug] = useState<Bug | null>(null);

    
    {/* Function to create a new Bug */}

    const createBug = async (newBug: CreateBug): Promise<Bug> => {

        const data = {
            title: newBug.title,
            description: newBug.description,
            stack_trace: newBug.stack_trace,
            screenshot: newBug.screenshot,
            priority: newBug.priority,
            severity: newBug.severity,
            reporter: newBug.reporter,
            steps_to_reproduce: newBug.steps_to_reproduce,
            environment: newBug.environment,
            category: newBug.category,
            labels: newBug.labels
        }

        const res = await api.post("/bugs", data)
        console.log(res.data);

        return res.data;
    }

return (
    <BugContext.Provider value={{bug, setBug, createBug}}>
        {children}
    </BugContext.Provider>
)
}

export const useBug = () => {
    const context = useContext(BugContext);

    if(!context){
        throw new Error("Bug Context must be used inside a Bug Provider")
    }

    return context;
}