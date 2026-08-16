export interface Project {
    id: number
    name: string
    description?: string
    category: string
    owner: string
    source: string
    repository?: string
    members: number
    status: string
    last_activity: string
    created_at: string
  };

  export type ProjectStatus = 
    | "active"
    | "inactive"


  export type createProjectInput = Pick<Project, "name" | "description" | "category">

