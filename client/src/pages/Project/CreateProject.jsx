import {
  FolderKanban,
  GitBranch,
  Check,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/useProjects";

const CreateProject = () => {

  const {data, isLoading, error } = useProjects()
  
  


  return (
    <div className="max-w-3xl mx-auto space-y-6">


      {/* Header */}
      <div>

        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <FolderKanban className="h-6 w-6"/>
          Create Project
        </h1>


        <p className="text-sm text-zinc-500 mt-1">
          Create a project and optionally connect a code repository for automatic issue tracking.
        </p>

      </div>




      <Card>


        <CardHeader>

          <CardTitle>
            Project Information
          </CardTitle>

        </CardHeader>



        <CardContent className="space-y-5">



          {/* Name */}

          <div className="space-y-2">

            <label className="text-sm font-medium">
              Project Name
            </label>


            <Input
              placeholder="Example: Customer Portal"
            />

          </div>





          {/* Description */}

          <div className="space-y-2">

            <label className="text-sm font-medium">
              Description
            </label>


            <Textarea
              placeholder="Describe what this project is about..."
              rows={4}
            />

          </div>






          {/* Repository Connection */}

          <div className="
            border
            rounded-xl
            p-5
            space-y-4
          ">


            <div className="flex items-start gap-3">


              <div className="
                h-10
                w-10
                rounded-lg
                bg-zinc-100
                dark:bg-zinc-800
                flex
                items-center
                justify-center
              ">

                <GitBranch className="h-5 w-5"/>

              </div>



              <div>

                <h3 className="font-medium">
                  Connect Repository
                </h3>

                <p className="text-sm text-zinc-500">
                  Optional. Connect your repository to automatically sync issues,
                  commits and pull requests.
                </p>

              </div>


            </div>






            <div className="grid gap-3">


              {/* Github */}

              <Button
                variant="outline"
                className="justify-start"
              >


                Connect GitHub Repository

              </Button>





              {/* GitLab */}

              <Button
                variant="outline"
                className="justify-start"
              >

                <GitBranch className="h-5 w-5 mr-3"/>

                Connect GitLab Repository

              </Button>


            </div>

            <div className="
              flex
              items-center
              gap-2
              text-sm
              text-zinc-500
            ">


              <Check className="h-4 w-4"/>

              You can connect a repository later from settings.


            </div>


          </div>








          {/* Create */}

          <div className="flex justify-end pt-3">


            <Button>

              <FolderKanban className="h-4 w-4 mr-2"/>

              Create Project

            </Button>


          </div>



        </CardContent>


      </Card>


    </div>
  );
};


export default CreateProject;