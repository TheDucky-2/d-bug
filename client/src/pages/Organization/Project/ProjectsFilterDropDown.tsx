import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"

const ProjectsFilterDropDown = ({openTrigger}) => {
  return (
    <div>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {openTrigger}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        
        <DropdownMenuGroup>
             <DropdownMenuLabel>Filter by</DropdownMenuLabel>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Severity</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Critical</DropdownMenuItem>
                <DropdownMenuItem>High</DropdownMenuItem>
                <DropdownMenuItem>Medium</DropdownMenuItem>
                <DropdownMenuItem>Low</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Open</DropdownMenuItem>
                <DropdownMenuItem>In Progress</DropdownMenuItem>
                <DropdownMenuItem>In Review</DropdownMenuItem>
                <DropdownMenuItem>Reopened</DropdownMenuItem>
                <DropdownMenuItem>Resolved</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default ProjectsFilterDropDown