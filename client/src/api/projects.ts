import api from "@/config/axios";
import type { createProjectInput, Project } from "@/types/project";
import { toast } from "sonner";

export const createProject = async ({name, category, description }: createProjectInput) => {

    try{
    const newProjectData = {
        "name": name,
        "category": category,
        "description": description
    }
    console.log(newProjectData)

    const res = await api.post("/projects", newProjectData)

    return res.data;

    }catch(error){
        toast.error(
            error?.response?.data?.detail||'Something went wrong'
        )
    }
}

export const fetchAllProjects = async () => {
    const res = await api.get("/projects")
    return res.data;

}

export const fetchCurrentProject = async () => {
    const res = await api.get("/projects/me")

    return res.data;
}

export const deleteProject = async({id}: Project) => {

    const res = await api.delete(`/projects/${id}`)

    return res.data.message;
}


