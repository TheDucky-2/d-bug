import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { ChangeEvent, ReactElement } from "react"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { X, Mail, User } from "lucide-react"
import { memberRole, memberStatus } from "../../../assets/assets.js";
import { useState } from "react";
import { UpdateMemberDialogProps, UpdateMemberForm } from "../../../types/types.js";

const UpdateMemberDialog = ({openTrigger}: UpdateMemberDialogProps) => {
    const [formData, setFormData] = useState<UpdateMemberForm>(
        {
          status : "Active",
          role: "Developer",
        }
      );

    const handleFormSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

    }


  return (
    <>
    <style>
    {`
    @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

    * {
        font-family: "Manrope", sans-serif;
    }
    `}
    </style>
    <div>
       <Dialog>
          
            <DialogTrigger asChild>
            {openTrigger}
            </DialogTrigger>
        
            <DialogContent className="sm:max-w-sm max-h-[90vh] justify-center flex flex-col overflow-auto shadow-xl shadow-zinc-900/30 border border-black/10">
              <form onSubmit={handleFormSubmit} id="member-update-form">
              <DialogHeader>
                <DialogTitle className={`text-xl flex items-center justify-center gap-3 mb-4 leading-none`}> 
                <span>Update Member</span> 
                <User size={18} className="text-yellow-700 dark:text-yellow-400"/>
                </DialogTitle>
                <DialogDescription>
    
                </DialogDescription>
              </DialogHeader>
            <div className="flex-1 overflow-y-auto pr-3 bug-scroll">
              {/**Fields */}
              <FieldGroup>
    
                {/** Member Status*/}
                <Field>
                    <Label className={`text-sm font-semibold flex items-center gap-1`} htmlFor="member-role">
                        Status
                    </Label>
                    <Select items={memberStatus} id="member-status" value={formData.status} 
                    onValueChange={(value:string) => 
                              {      console.log(value)
                                    setFormData(prev =>( {
                                    ...prev,
                                      status : value
                                  }))
                                }
                              }>
    
                    <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Select role..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        {memberStatus.map((status) => (
                            <SelectItem key={status} value={status} className={`text-sm`}>
                            {status}
                            </SelectItem>
                        ))}
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                </Field>
    
                {/** Member Role*/}
                <Field>
                    <Label className={`text-sm font-semibold flex items-center gap-1`} htmlFor="member-role">
                        Role
                    </Label>
                    <Select items={memberRole} id="member-role" value={formData.role} 
                    onValueChange={(value:string) => 
                              {      console.log(value)
                                    setFormData(prev =>( {
                                    ...prev,
                                      role : value
                                  }))
                                }
                              }>
    
                    <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Select role..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        {memberRole.map((role) => (
                            <SelectItem key={role} value={role} className={`text-sm`}>
                            {role}
                            </SelectItem>
                        ))}
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                </Field>
    
              </FieldGroup>
              </div>
        
              <DialogFooter className="shrink-0 border-t pt-4 mt-10 ">
    
                
                <DialogClose render={<button> <X/></button>} />
           
            <button type="submit" id="member-update-form" 
            className="flex items-center justify-center gap-3 bg-amber-400  px-5 text-black cursor-pointer  font-semibold text-sm w-full py-2 
            hover:bg-amber-500" >
                Update 
            </button>
    
              </DialogFooter>
                </form>
            </DialogContent>
    
        </Dialog>
        </div>
        </>
  )
}

export default UpdateMemberDialog