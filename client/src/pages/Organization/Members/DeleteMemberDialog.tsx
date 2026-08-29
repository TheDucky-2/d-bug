
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { useDeleteMember } from "@/hooks/useMembers"
import {X, Trash2, UserX } from "lucide-react"


const DeleteMemberDialog = ({openTrigger, memberId}) => {

  const deleteMember = useDeleteMember()
 
  return (
    <>

    <div>
        <Dialog>
            <DialogTrigger asChild>
                {openTrigger}
            </DialogTrigger>
            <DialogContent 
            className="sm:max-w-sm max-h-[90vh] justify-center flex flex-col overflow-auto shadow-xl shadow-zinc-900/30 border border-black/10 px-6">

              <DialogHeader>
                <div className="flex-col items-center mt-5 justify-center">
                <div className="items-center flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center py-(--padding-vertical-md)">
                    <UserX className="text-foreground h-12 w-12"/>
                  </div>
                </div>
                <div>
                  <h2 className="dark:text-zinc-200/80 text-zinc-900 font-semibold  text-xl text-center">
                  Are you sure you want to <br/>delete this member?
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300/50 mt-2 text-center">
                    This action cannot be undone.
                  </p>
                </div>
                  
              </div>

              </DialogHeader>
    
              <DialogFooter className="shrink-0 py-(--padding-vertical-md)">
    
                <DialogClose render={<button> <X/></button>} />
           
            <button onClick={() => 
            deleteMember.mutate(memberId)} 
            className="dashboard-destructive-button" >
                Delete
            </button>
    
              </DialogFooter>

            </DialogContent>
        </Dialog>
    </div>
    </>
  )
}

export default DeleteMemberDialog