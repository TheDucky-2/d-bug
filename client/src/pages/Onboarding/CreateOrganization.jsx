import { ArrowRight, LoaderCircle } from "lucide-react"
import { useState } from "react"
import { Image } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import api from "@/config/axios";
import { toast } from "sonner";

const CreateOrganization = ({nextStep}) => {

  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState({
    organizationName: "",
    organizationLogo : {
      url: "",
      name: "",
      size: 0,
      file: null
    }
  })

  const handleNameInput = (e) => {
    const name = e.target.value

    setFormData(prev => ({
      ...prev, 
      organizationName: name
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]

    if(!file) return;

    setFormData(prev => ({
      ...prev, 
      organizationLogo: {
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        file: file
      }
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{    
    setIsCreating(true)

    const data = new FormData()

    data.append("organization_name", formData.organizationName)

    if(formData.organizationLogo.file){
      data.append("organization_logo", formData.organizationLogo.file)
    }

    const organizationData = await api.post("/organizations", data)

    toast.success(organizationData.data.message)
    nextStep()

    }catch(error){
      toast.error(error.response?.data?.detail || error.response?.data?.message)
      return 

    }finally{
      setIsCreating(false)
    }
  }


  return (
    <div className="flex flex-1 flex-col px-5 h-full items-center gap-8`  max-w-5xl overflow-y-auto w-full min-w-0">

      <div className="flex flex-col  gap-6 text-left max-w-xl  p-10">

        <div className="border dark:border-white/10 border-zinc-700/30 rounded-md p-10 flex flex-col gap-5 justify-between">

          <form onSubmit = {handleSubmit} className="gap-4 flex flex-col ">
                      {/**Header and body text */}
          <div className="gap-5 flex flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold ">
          Create your organization
          </h1>

          <p className="max-w-[50ch] text-md dark:text-zinc-300/70">
          Your organization is the workspace where your team manages projects, repositories and bug reports.
          </p>

                  {/* Input Fields */}
              <div className="gap-2 flex flex-col">

                  {/* Organization Name - Required */}

                <label htmlFor="organization-name" className="text-sm dark:text-zinc-300 text-zinc-800 ">
                  Organization Name 
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <input type="text" placeholder="Acme Engineering" name="organization-name" onChange={handleNameInput} value={formData.organizationName} required
                className="w-full md:w-64 lg:w-96 rounded-md border bg-transparent dark:border-white/40 border-zinc-700/60 px-2 py-1 text-md  dark:placeholder:text-zinc-400/40 placeholder:text-zinc-900/40
                dark:text-zinc-300 text-zinc-800 "/>
              </div>

              {/* Organization Logo - Required */}
              <div className="gap-1 flex flex-col">
                <p className="text-sm dark:text-zinc-300 text-zinc-800">Organization Logo <span className="dark:text-zinc-400/80 text-zinc-800/70"> (optional) </span></p>

                
                <label htmlFor="imageUpload" 
                className="text-md dark:text-zinc-300 text-zinc-800 flex items-center gap-2  rounded-md border w-full md:w-64 lg:w-96 px-2 py-1 cursor-pointer 
                bg-transparent border-dashed border-zinc-600 hover:border-zinc-400 hover:bg-zinc-700/30 ">
                  <Image size={20}/> 
                  Upload Image
                  <Separator orientation="vertical"/>
                  <p >{formData.organizationLogo ? formData.organizationLogo.name : "No image selected"}</p>
                </label>
                <input type="file" name="organization-image" id="imageUpload" accept="image/*" onChange={handleImageUpload}
                className="w-full md:w-64 lg:w-96 rounded-md border dark:border-white/40 border-zinc-700/20 text-md font-semibold rounded-l-xl
                text-zinc-800  file:text-sm file:bg-zinc-200 file:px-3 file:h-full hidden
                "></input>
                
              </div>


            <p className="text-sm dark:text-zinc-300/70 text-zinc-900/70 -my-1 ">
            You can invite team members and manage access later.
            </p>


          {/** Submit Button */}

          <div className="items-center flex justify-center p-4 ">

            
          <button type="submit" disabled={isCreating}
            className="px-4 py-3 bg-zinc-500 hover:bg-zinc-600 dark:hover:bg-zinc-400/80  text-white font-medium dark:text-white cursor-pointer rounded-md flex gap-2 items-center
            ">
                {isCreating && (<LoaderCircle className="animate-spin w-5 h-5"/>)}
                {isCreating ? "Creating" : "Continue"}

              <ArrowRight size={22}/>
          </button>
          
          </div>
          </div>
        </form>
      </div>
      </div>

    </div>
  )
}

export default CreateOrganization