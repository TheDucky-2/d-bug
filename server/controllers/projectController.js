import { prisma } from "../config/db.js";

// POST /projects
export const createProject = (req, res) => {



    res.status(201).json({
        success: true,
        message: "Project created successfully!"
    })

}

// GET /projects/:projectId
export const getProject = (req, res) => {

    res.status(200).json({
        success: true,
        message: "Project fetched successfully!",
        project: project
    })

}

// GET /projects

export const getAllProjects = (req, res) =>{

    res.status(200).json({
        success: true,
        message: "Project fetched successfully!",
        projects: projects
    })

}

// DELETE /projects/:projectId

export const deleteProject = () => {
    res.status(204).json({
        success: true,
        message: "Project deleted successfully!"
    })

}

// PUT /projects/:projectId

export const updateProject = () => {

    res.status(200).json({
        success: true,
        message: "Project updated successfully!"
    })


}

// PUT /projects/:projectId/members

export const getProjectMembers = () => {

    res.status(200).json({
        success: true,
        message: "Project updated successfully!"
    })


}

// POST /projects/:projectId/github

export const linkRepoToProject = () => {

    res.status(201).json({
        success: true,
        message: "Repo linked to project  successfully!"
    })


}


// GET /projects/:projectId/github

export const getRepos = (req, res) => {

    res.status(201).json({
        success: true,
        repos: repos
    })


}

// DELETE /projects/:projectId/github

export const unlinkRepoFromProject = (req, res) => {

    res.status(201).json({
        success: true,
        repos: repos
    })
}

// POST /projects/:projectId/github/issues

export const importIssues = (req, res) => {

    res.status(201).json({
        success: true,
        bugs: issues
    })
}