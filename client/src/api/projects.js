import api from "@/config/axios";

export const createProject = async (formData) => {

    const data = new FormData()

    data.append("project_name", formData.projectnName)
    data.append("project_category", formData.projectCategory)
    
    if(formData.projectDescription){
        data.append("description", formData.projectDescription)
    }

    const res = await api.post("/projects", data)

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


