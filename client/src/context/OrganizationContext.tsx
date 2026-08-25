import { Organization, OrganizationContextType } from "@/types/organization";
import { CreateOrganizationProps } from "@/types/organization";
import { useContext, createContext, useState } from "react";
import api from "@/config/axios";

const OrganizationContext = createContext<OrganizationContextType | undefined>(undefined)

export const OrganizationProvider = ({children}: {children: React.ReactNode}) => {

    const [organization, setOrganization] = useState<Organization | null>(null)

    // Function to create an organization

    const createOrganization = async (formData: CreateOrganizationProps) : Promise<Organization> => {
    
        const data = new FormData()

        if (!formData.organizationName.trim()){
              throw new Error("Organization name is required");
        }
        
        data.append("organization_name", formData.organizationName.trim())


        if (formData.organizationLogo.file) {
            data.append("organization_logo", formData.organizationLogo.file)
        }

        const res = await api.post("/organizations", data)
        return res.data;   
    }

    const fetchCurrentOrganization = async () : Promise<Organization> => {
     
        const res = await api.get("/organizations/me")

        console.log(res.data)

        return res.data;
    

    }

    return (
        <OrganizationContext.Provider value={{
            organization, setOrganization, createOrganization, fetchCurrentOrganization
            }}>

            {children}
        </OrganizationContext.Provider>
        
    )
}


export const useOrganization = () => {

    const context = useContext(OrganizationContext)

    if(!context){
        throw new Error("Organization Context must be used inside a Organization Provider")
    }

    return context;

}
