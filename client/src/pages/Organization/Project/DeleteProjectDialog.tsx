
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import {X,  FileXCorner, Trash2 } from "lucide-react"
import { useState } from "react"
import { useDeleteProject } from "@/hooks/useProjects"

const DeleteProjectDialog = ({openTrigger, projectId}) => {

  const [project, setProject] = useState("travel")

  const deleteProject = useDeleteProject()

 
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full p-2">
                    <FileXCorner  className="text-red-600 h-12 w-12"/>
                  </div>
                </div>
                <div>
                  <h2 className="dark:text-zinc-200/80 text-zinc-900 font-semibold mt-4 text-xl text-center">
                  Are you sure you want to <br/>delete this project?
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300/50 mt-2 text-center">
                    This action cannot be undone.
                  </p>
                </div>
                  
              </div>

              </DialogHeader>
    
              <DialogFooter className="shrink-0  pt-4 py-2 mt-5">
    
                <DialogClose render={<button> <X/></button>} />
           
            <button onClick={() => deleteProject.mutate(projectId)}
            className="flex items-center justify-center gap-3 bg-red-500  
            px-5 text-white dark:text-black cursor-pointer  font-semibold text-sm w-full py-2 rounded-sm
            hover:bg-red-700 dark:hover:bg-red-400 transition-colors" >
                Delete
            </button>
    
              </DialogFooter>

            </DialogContent>
        </Dialog>
    </div>
    </>
  )
}

export default DeleteProjectDialog