import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Eye, Settings, Trash2 } from "lucide-react"
import BugDialog from "../BugDialog"
import DeleteBugDialog from "../DeleteBugDialog"

const BugsTableDropDown = ({openTrigger, bug}) => {

  return (
    <>

    <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {openTrigger}
    </DropdownMenuTrigger>
      <DropdownMenuContent className="dashboard-dropdown">
        <DropdownMenuGroup>
          <DropdownMenuItem  onSelect={(e) => e.preventDefault()}>
            <BugDialog bug={bug} openTrigger={
              <button className={`cursor-pointer flex items-center gap-2`}>
                <Eye/>
                View Details
              </button>
            }/>

          </DropdownMenuItem>
          <DropdownMenuItem className={`cursor-pointer flex items-center gap-2`}>
            <Settings />
            Manage
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onSelect = {(e) => e.preventDefault()}>

            <DeleteBugDialog bugId={bug.id} openTrigger={
            <button className="cursor-pointer flex items-center gap-2">
              <Trash2/>
              Delete Bug
            </button>
            }>

            </DeleteBugDialog>

          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>
    </>
  )
}

export default BugsTableDropDown