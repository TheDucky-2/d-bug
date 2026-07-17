import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { FolderPlus, LoaderCircle, X } from "lucide-react"
import { useState } from "react"
import github_icon from "/images/github_icon.png"
import github_icon_dark from "/images/github_icon_dark.png"
import { useTheme } from "@/context/ThemeContext"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { projectTypes } from "@/assets/assets"
import { toast } from "sonner"

import api from "@/config/axios"
import { Separator } from "@/components/ui/separator"
import { useCreateProject } from "@/hooks/useProjects"

const CreateProjectDrawer = ({ openTrigger }) => {

  const createProject = useCreateProject()
  const [mode, setMode] = useState(null)
  const {isDark} = useTheme()
  const [formData, setFormData] = useState({
                                    projectName : "",
                                    projectCategory: "",
                                    projectDescription: ""
                                  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    createProject.mutate(formData, {
      onSuccess: (data) => {
        toast.success(data.message)
      },
      onError: (error) => {
        toast.error(error?.response?.data?.detail || error?.response?.data?.message)
      }
    })
  }


  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        {openTrigger}
      </DrawerTrigger>

      <DrawerContent className="w-full sm:min-w-lg ml-auto">
        <DrawerHeader className={`flex flex-col`}>
          <div className="flex items-center justify-between">
          <DrawerTitle className="text-2xl">
            Create a New Project
          </DrawerTitle>
          <DrawerClose asChild>
            <X/>
          </DrawerClose>
          </div>

          <DrawerDescription className="mt-2 text-sm">
            Start a bug triage project manually or connect an existing GitHub repository.
          </DrawerDescription>
        </DrawerHeader>

        <div className="p-4 space-y-4">
          {!mode && (
            <>
              <button
                onClick={() => setMode("manual")}
                className="w-full flex items-center gap-4 rounded-sm border p-4 text-left hover:bg-muted transition cursor-pointer"
              >
                <FolderPlus className="h-6 w-6" />

                <div>
                  <h3 className="font-medium">
                    Create Manually
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Create an empty project and configure it later.
                  </p>
                </div>
              </button>

              <button
                onClick={() => setMode("github")}
                className="w-full flex items-center gap-4 rounded-sm border p-4 text-left hover:bg-muted transition cursor-pointer"
              >
                <img src={isDark ? github_icon : github_icon_dark} className="h-7 w-7"/>

                <div>
                  <h3 className="font-medium">
                    Connect GitHub Repository
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Import issues and sync bugs from a repository.
                  </p>
                </div>
              </button>
            </>
          )}

          {mode === "manual" && (
            <div className="space-y-4">

              <form onSubmit={handleFormSubmit} id="project-create-form" >
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="project-name" className={`flex gap-1`}>
                      <span>Project Name</span>
                      <span className="text-red-600 font-bold text-lg">*</span>
                      </FieldLabel>
                    <Input required id="project-name" autoComplete="off" value = {formData.projectName}
                    onChange = {(e) => setFormData(prev => (
                       { ...prev,
                          projectName: e.target.value
                       }

                      ))
                    }
                    placeholder="Bug Tracker Pro, My SaaS Dashboard, etc." className={`rounded-xs`}/>
                    <FieldDescription>Name of your project or repository.</FieldDescription>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="project-category" className={`flex gap-1`}>
                      <span>Category</span>
                      <span className="text-red-600 font-bold text-lg">*</span>
                    </FieldLabel>
                   <Select id="project-category" required
                   items={projectTypes}  value={formData.projectCategory}
                    onValueChange={(value) => 
                          {      console.log(value)
                                setFormData(prev =>( {
                                ...prev,
                                  projectCategory : value
                              }))
                            }
                          }
                   >
                      <SelectTrigger className="w-45">
                        <SelectValue placeholder="Enterprise Software"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {projectTypes.map((type) => (
                            <SelectItem key={type.id} value = {type.name} 
                            >
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FieldDescription>Description of what this project is about.</FieldDescription>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="description">Description</FieldLabel>
                    <Textarea id="description" className="min-h-32 rounded-xs"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        projectDescription: e.target.value,
                      }))
                    }
                    placeholder="e.g. A platform for managing software issues, tracking bugs and collaborating with the development team."/>
                    <FieldDescription>Description of what this project is about.</FieldDescription>
                  </Field>

                    <button type="submit" id="project-create-form" disabled={createProject.isPending}
              className="w-full text-sm text-black bg-yellow-500 hover:bg-yellow-600 dark:text-black p-3 font-semibold mt-4">
                {mode === "github" ? "Import Repository" : 
                
                createProject.isPending ? 
                (
                  <div className="flex items-center justify-center gap-2">
                    <LoaderCircle size={18} className="animate-spin"/>
                    <p>Creating Project...</p>
                  </div>
                )
                : "Create Project"}
                

              </button>
                  
                </FieldGroup>
              
            <Separator/>
            <FieldGroup>
              <div className="flex flex-col gap-1">

                {/**Create Project Button */}

                  {/** GO BACK button */}

            <button onClick={() => setMode(null)} 
            className="w-full font-semibold text-sm bg-primary text-primary-foreground  dark:hover:bg-zinc-300 hover:bg-zinc-700 p-3  ">
              Go Back
            </button>

          </div>
          </FieldGroup>
          </FieldSet>
            </form>
            </div>
          )}

          {mode === "github" && (
            <div className="space-y-4">
              <button 
              className="w-full bg-black text-white transition hover:bg-zinc-700 dark:hover:bg-zinc-600 py-4 flex items-center justify-center gap-2 font-semibold text-sm">
                <img src={github_icon} className="h-5 w-5"/>
                Connect GitHub
              </button>

              <p className="text-sm text-muted-foreground text-center">
                You will be redirected to GitHub to authorize access.
              </p>

            <div className="pt-4 border-t">

            <button onClick={() => setMode(null)} 
            className="w-full font-semibold text-sm bg-primary text-primary-foreground  dark:hover:bg-zinc-300 hover:bg-zinc-700 p-3 ">
              Go Back
            </button>
            </div>
            </div>
          )}
        </div>

      </DrawerContent>
    </Drawer>
  )
}

export default CreateProjectDrawer