import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendInvite } from "@/api/invitations.js";


export const useCreateInvite  = () => {
    const queryClient = useQueryClient()

    return useMutation(
            {
                mutationFn: sendInvite,
                onSuccess: () => {
                    queryClient.invalidateQueries({
                        queryKey: ["invites"]
                    })
                }

            }
    )
}