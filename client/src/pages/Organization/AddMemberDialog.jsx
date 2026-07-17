import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog"
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
import { Textarea } from "@/components/ui/textarea"
import { useCreateInvite } from "@/hooks/useEmail"
import { useState } from "react"
import { toast } from "sonner";



const AddMemberDialog = ({openTrigger}) => {

  const [formData, setFormData] = useState(
    {
      toEmail : "",
      role: "",
      optionalComments: ""
    }
  )

  const createInvite = useCreateInvite()

  const handleFormSubmit = (e)=> { 

    e.preventDefault()

    createInvite.mutate(formData, {
      onSuccess: (data) => {
        toast.success(data.message)
      },
      onError: (error) => {
        toast.error(error?.response?.data?.detail || error?.response?.data?.message)
      }
    })
  }

  const memberRole = [
    "admin",
    "developer",
    "reviewer",
    "owner"
  ]

  return (
    <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>
    <div>
   <Dialog>
      
        <DialogTrigger asChild>
        {openTrigger}
        </DialogTrigger>
    
        <DialogContent className="sm:max-w-sm max-h-[90vh] justify-center flex flex-col overflow-auto shadow-xl shadow-zinc-900/30 border border-black/10">
          <form onSubmit={handleFormSubmit} id="invite-form">
          <DialogHeader>
            <DialogTitle className={`text-xl flex items-center justify-center gap-3 leading-none`}> 
            <span>Add a New Member</span> 
            <User size={18} className="text-yellow-700 dark:text-yellow-400"/>
            </DialogTitle>
            <DialogDescription>

            </DialogDescription>
          </DialogHeader>
        <div className="flex-1 overflow-y-auto pr-3 bug-scroll">
          {/**Fields */}
          <FieldGroup>

            {/** Email Address */}
            <Field>
              <Label htmlFor="invite-email" className={`text-sm font-semibold flex items-center gap-1`}>
                Email Address<span className="text-red-600 -top-1 -right-1">*</span>
              </Label>
              <Input id="invite-email" name="invite-email" type="email" value={formData.toEmail}
              onChange = {(e) => {
                setFormData(prev => ({
                  ...prev,
                  toEmail : e.target.value
                }))
              }}
              placeholder="user@your_organization.com" className="text-sm placeholder:text-sm rounded-sm" required/>

            </Field>

            {/** Member Role*/}
            <Field>
                <Label className={`text-sm font-semibold flex items-center gap-1`} htmlFor="member-role">
                    Role
                  <span className="text-red-600 -top-1 -right-1">*</span>
                </Label>
                <Select items={memberRole} id="member-role" value={formData.role} 
                onValueChange={(value) => 
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

            {/** Optional Comments*/}
            <Field>
                <Label className={`text-sm font-semibold`} htmlFor="optional-comments">

                    Optional Comments
                </Label>
               <Textarea className={`resize-y min-h-25 text-sm rounded-sm` } id="optional-comments" value={formData.optionalComments}
                onChange = {(e) => {
                setFormData(prev => ({
                  ...prev,
                  optionalComments : e.target.value
                }))
              }}
                />
            </Field>

          </FieldGroup>
          </div>
    
          <DialogFooter className="shrink-0 border-t pt-4 mt-10 ">

            
            <DialogClose render={<button> <X/></button>} />
       
        <button type="submit" id="invite-form" 
        className="flex items-center mt-2 justify-center gap-3 bg-amber-400  px-5 text-black cursor-pointer  font-semibold text-sm w-full py-2 hover:bg-amber-500" >
              <Mail/>
            Send Invite
       
        </button>
    
            
          </DialogFooter>
            </form>
        </DialogContent>

      
    </Dialog>
    </div>
    </>
  )
}

export default AddMemberDialog