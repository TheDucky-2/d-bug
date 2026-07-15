import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Image } from 'lucide-react';
import { Field, FieldGroup} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Bug } from "lucide-react"
import { bugCategories, bugSeverity, bugPriority, Environment } from "@/assets/assets.js"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"


const CreateBugDialog = ({openTrigger}) => {
  return (
   <div className="flex-1 overflow-y-auto scrollbar-thin">
    <Dialog>
      <form>
        <DialogTrigger>
        {openTrigger}
        </DialogTrigger>
    
        <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col overflow-auto">
          <DialogHeader>
            <DialogTitle className={`text-3xl flex items-center justify-center gap-3 leading-none`}> 
            <span>Create a New Bug</span> 
            <Bug size={22} className="align-middle shrink-0 translate-y-0.5 text-amber-500" />
            </DialogTitle>
            <DialogDescription>

            </DialogDescription>
          </DialogHeader>
        <div className="flex-1 overflow-y-auto pr-3 bug-scroll">
          {/**Fields */}
          <FieldGroup>

            {/** Bug Title */}
            <Field>
              <Label htmlFor="bug-title" className={`text-sm font-semibold`}>Title</Label>
              <Input id="bug-title" name="title" placeholder="Authentication" className="text-sm placeholder:text-sm rounded-sm" required/>
            </Field>

            {/** Bug Description */}
            <Field>
              <Label htmlFor="bug-description" className={`text-sm font-semibold`}>
                Description
              </Label>
              <Textarea id="bug-description" name="description" className={`text-sm placeholder:text-sm resize-y min-h-20 rounded-sm`}
              placeholder="Example: Unable to click on Login button as it is greyed out." />
            </Field>
            
            {/** Bug Category */}
            <Field>
                <Label className={`text-sm font-semibold`} htmlFor="bug-category">
                    Category
                </Label>
                <Select items={bugCategories} id="bug-category">

                <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Authentication" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    {bugCategories.map((category) => (
                        <SelectItem key={category} value={category} className={`text-base`}>
                        {category}
                        </SelectItem>
                    ))}
                    </SelectGroup>
                </SelectContent>
                </Select>
            </Field>
            
            {/** Bug Severity */}
            <Field>
                <Label className={`text-sm font-semibold`} htmlfFor="bug-severity" >
                    Severity
                </Label>
                <Select items={bugSeverity} id="bug-severity">

                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Low" className="placeholder:text-base text-base" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    {bugSeverity.map((severity) => (
                        <SelectItem key={severity.severityType} value={severity.severityType}
                        className={`${severity.textcolor} text-base`}>
                        {severity.severityType} 
                        </SelectItem>
                    ))}
                    </SelectGroup>
                </SelectContent>
                </Select>

            </Field>
            
            {/** Bug Priority */}
            <Field>
                <Label className={`text-sm font-semibold`} htmlFor="bug-priority">
                    Priority (P5: Lowest, P1: Highest)
                </Label>
                <Select items={bugPriority} id="bug-priority">

                <SelectTrigger className="w-full">
                    <SelectValue placeholder="P5" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    {bugPriority.map((priority) => (
                        <SelectItem key={priority} value={priority} className="text-base" >
                        {priority}
                        </SelectItem>
                    ))}
                    </SelectGroup>
                </SelectContent>
                </Select>
            </Field>

            {/** Environment */}
            <Field>
                <Label className={`text-sm font-semibold`} htmlFor="environment">
                    Environment
                </Label>
                <Select items={Environment} id="environment">

                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Development" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    {Environment.map((environment) => (
                        <SelectItem key={environment} value={environment} 
                        className={`text-base`}>
                        {environment}
                        </SelectItem>
                    ))}
                    </SelectGroup>
                </SelectContent>
                </Select>
            </Field>


            {/** Steps to Reproduce */}
            <Field>
                <Label className={`text-sm font-semibold`} htmlFor="reproduction-steps">

                    Steps to Reproduce
                </Label>
               <Textarea className={`resize-y min-h-25 text-sm rounded-sm` } id="reproduction-steps"
                placeholder={
                `1. Opened the application\n2. Navigated to...\n3. Clicked...\n4. Observed...\n`}
                />
            </Field>

            {/** Attachment */}
            <Field>
                <Label className={`text-sm font-semibold`} htmlFor="screenshots">Screenshot (optional)</Label>
                <label htmlFor="screenshot" 
                className="text-sm mb-2 dark:text-zinc-300 text-zinc-800 flex items-center gap-2  rounded-sm border w-full px-2 py-1 cursor-pointer 
                bg-transparent border-dashed border-zinc-600 hover:border-zinc-400 hover:bg-zinc-700/30 ">
                  <Image size={16}/> 
                  Upload Image
                  <Separator orientation="vertical"/>
                  <p >{ "No image selected"}</p>
                </label>
                <input type="file" name="bug-screenshot" id="screenshot" accept="image/*" 
                className="w-full md:w-64 lg:w-96 rounded-sm border dark:border-white/40 border-zinc-700/20 text-base font-semibold rounded-l-xl
                text-zinc-800  file:text-sm file:bg-zinc-200 file:px-3 file:h-full hidden 
                "></input>

            </Field>

          </FieldGroup>
          </div>
    
          <DialogFooter className="shrink-0 border-t pt-4 ">

            
            <DialogClose render={<button> <X/></button>} />
        <button type="submit" 
        className="bg-yellow-500 dark:hover:bg-yellow-400 py-2 hover:bg-amber-500 dark:text-black font-semibold text-base w-full" >
            Submit
        </button>
            
          </DialogFooter>

        </DialogContent>

      </form>
    </Dialog>
    </div>
  )
}

export default CreateBugDialog