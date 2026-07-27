import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject, fetchProjects } from "../api/projects.ts";

export const useFetchProjects = () =>{

    return useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
    })
}

export const useCreateProject = () => {

    const queryClient = useQueryClient();

    return useMutation(
       { mutationFn: createProject,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            })
        }
        }
    )
}
