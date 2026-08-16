import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteProjectDialog from "./DeleteProjectDialog"
import { Trash2, SquarePen, Users } from 'lucide-react';

const ProjectDropDown = ({openTrigger, projectId}) => {

  return (
    <>
    <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {openTrigger}
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="dashboard-dropdown">
        <DropdownMenuGroup>
          <DropdownMenuItem className={`cursor-pointer flex items-center gap-2`}>
            <SquarePen/>
            <p>Edit Project</p>
          </DropdownMenuItem>
          <DropdownMenuItem className={`cursor-pointer flex items-center gap-2`}>
            <Users/>
            <p>Manage Members</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onSelect = {(e) => e.preventDefault()}>
          
          <DeleteProjectDialog projectId={projectId} openTrigger={
              <button className="cursor-pointer flex items-center gap-2">
                <Trash2/>
                <p>Delete Project</p>
              </button>
          }/>
          </DropdownMenuItem>

        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>
    </>
  )
}

export default ProjectDropDown