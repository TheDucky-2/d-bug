import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { createOrganization, fetchCurrentOrganization } from "@/api/organizations";

export const useCreateOrganization = () => {

    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: createOrganization,
            onSuccess: () => {
                queryClient.invalidateQueries(
                    {queryKey: ["organizations"]}
                )
            }
            
        }
    )}

export const useFetchCurrentOrganization = () => {

    return useQuery({
        queryKey: ["organizations"],
        queryFn: fetchCurrentOrganization,
        staleTime: 1000 * 60 * 5  
    })

}
