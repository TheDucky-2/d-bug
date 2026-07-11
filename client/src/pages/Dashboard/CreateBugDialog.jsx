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
import { Field, FieldGroup, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Bug } from "lucide-react"
import { bugCategories, bugSeverity, bugPriority, Environment } from "@/assets/assets.js"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"


const CreateBugDialog = ({openTrigger}) => {
  return (
    <div>
    <Dialog>
      <form>
        <DialogTrigger>
        {openTrigger}
        </DialogTrigger>
        <DialogContent className="md:max-w-md">
          <DialogHeader>
            <DialogTitle className={`text-xl flex items-center justify-center gap-3 leading-none`}> 
            <span>Create a New Bug</span> 
            <Bug size={22} className="align-middle shrink-0 translate-y-0.5 text-amber-500" />
            </DialogTitle>
            <DialogDescription>

            </DialogDescription>
          </DialogHeader>

          {/**Fields */}
          <FieldGroup>

            {/** Bug Title */}
            <Field>
              <Label htmlFor="bug-title" className={`text-md`}>Title</Label>
              <Input id="bug-title" name="title" placeholder="Authentication" className={`text-base`} required/>
            </Field>

            {/** Bug Description */}
            <Field>
              <Label htmlFor="bug-description">
                Description
              </Label>
              <Textarea id="bug-description" name="description" className={`text-base resize-y min-h-20`}
              placeholder="Example: Unable to click on Login button as it is greyed out." />
            </Field>
            
            {/** Bug Category */}
            <Field>
                <Label>
                    Category
                </Label>
                <Select items={bugCategories}>

                <SelectTrigger className="w-45">
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
                <Label>
                    Severity
                </Label>
                <Select items={bugSeverity}>

                <SelectTrigger className="w-45">
                    <SelectValue placeholder="Low" />
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
                <Label>
                    Priority (P5: Lowest, P1: Highest)
                </Label>
                <Select items={bugPriority}>

                <SelectTrigger className="w-45">
                    <SelectValue placeholder="P5" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    {bugPriority.map((priority) => (
                        <SelectItem key={priority} value={priority}
                        className={`text-base`}>
                        {priority}
                        </SelectItem>
                    ))}
                    </SelectGroup>
                </SelectContent>
                </Select>
            </Field>

            {/** Environment */}
            <Field>
                <Label>
                    Environment
                </Label>
                <Select items={Environment}>

                <SelectTrigger className="w-45">
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
                <Label>
                    Steps to Reproduce
                </Label>
               <Textarea className={`resize-y min-h-25 text-base`}
                placeholder={
                `1. Opened the application\n2. Navigated to...\n3. Clicked...\n4. Observed...\n`}
                />
            </Field>

            {/** Attachment */}
            <Field>
                <Label>Attachments</Label>
                <label htmlFor="screenshot" 
                className="text-md dark:text-zinc-300 text-zinc-800 flex items-center gap-2  rounded-md border w-full md:w-64 lg:w-96 px-2 py-1 cursor-pointer 
                bg-transparent border-dashed border-zinc-600 hover:border-zinc-400 hover:bg-zinc-700/30 ">
                  <Image size={20}/> 
                  Upload Image
                  <Separator orientation="vertical"/>
                  <p >{ "No image selected"}</p>
                </label>
                <input type="file" name="bug-screenshot" id="screenshot" accept="image/*" 
                className="w-full md:w-64 lg:w-96 rounded-md border dark:border-white/40 border-zinc-700/20 text-md font-semibold rounded-l-xl
                text-zinc-800  file:text-sm file:bg-zinc-200 file:px-3 file:h-full hidden
                "></input>
                <FieldDescription>
                    Upload screenshot
                </FieldDescription>
            </Field>

          </FieldGroup>
          <DialogFooter>
            
            <DialogClose render={<button> <X/></button>} />
            
          </DialogFooter>
        <button type="submit" 
        className="bg-yellow-500 dark:hover:bg-yellow-400 py-2 hover:bg-amber-500 dark:text-black font-semibold text-base">
            Submit
        </button>
        </DialogContent>

      </form>
    </Dialog>
    </div>
  )
}

export default CreateBugDialog