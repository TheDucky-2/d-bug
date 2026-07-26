import api from "@/config/axios";
import type { createProjectInput } from "@/types/project";

export const createProject = async ({name, category, description }: createProjectInput) => {

    const newProjectData = {
        "name": name,
        "category": category,
        "description": description
    }
    console.log(newProjectData)

    const res = await api.post("/projects", newProjectData)

    return res.data;
}

export const fetchProjects = async () => {
    const res = await api.get("/projects")
    return res.data;

}

export const fetchCurrentProject = async () => {
    const res = await api.get("/projects/me")

    return res.data;
}


