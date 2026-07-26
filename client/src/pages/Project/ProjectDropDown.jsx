import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ProjectDropDown = ({openTrigger}) => {
  return (

    <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {openTrigger}
    </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Edit Project
          </DropdownMenuItem>
          <DropdownMenuItem>
            Manage Members
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            Delete Project
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>
  )
}

export default ProjectDropDown