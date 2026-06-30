import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { useTheme } from "@/context/ThemeContext";
import { Bug, TriangleAlert, CircleDashed, CircleCheck } from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Field, FieldLabel } from "@/components/ui/field";
import { bugTrend, topProjects, chartConfig} from "@/assets/assets";
import { bugSeverity } from "@/assets/assets";
import DataTable from "./DataTable/DataTable.jsx";
import { bugs } from "@/assets/assets.js";
import { Bar, BarChart, XAxis} from "recharts"
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const MainContent = () => {

  const {isDark} = useTheme();
  const [criticalCases, setCriticalCases] = useState(4);
  const [openCases, setOpenCases] = useState(6);
  const [resolvedCases, setResolvedCases] = useState(12);

  return (
    <div className="flex flex-col gap-4 px-4 py-3">
      <div className={`${isDark ? "bg-black text-white/70" : "bg-white text-black"} grid grid-cols-4 grid-rows-1 gap-4`}>
      
      {/* METRIC CARDS */}
            
      {/* BUG COUNT */}
      <Card className={` border border-white/20 h-45 ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black"}`}>
      <CardHeader>
        <CardTitle className="text-lg">TOTAL BUGS</CardTitle>
        <CardDescription></CardDescription>
        <CardAction><Bug color={isDark ? "white" : "black"} /></CardAction>
      </CardHeader>
      <CardContent>
        <h1 className="text-6xl font-bold">{bugs.length}</h1>
      </CardContent>
      </Card>

       {/* COUNT OF CRITICAL BUGS */}
      
      <Card className={` border border-white/20 h-45 ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black"}`}>
      <CardHeader>
        <CardTitle className="text-lg">CRITICAL</CardTitle>
        <CardDescription></CardDescription>
        <CardAction>  <TriangleAlert color="red"/></CardAction>
      </CardHeader>
      <CardContent>
        <h1 className="text-6xl text-red-400 font-bold">
          {bugs.filter(bug => bug.severity === "critical").length}
        </h1>
      </CardContent>
      </Card>

        {/* OPEN CASES */}
      <Card className={` border border-white/20 h-45 ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black"}`}>
      <CardHeader>
        <CardTitle className="text-lg">OPEN</CardTitle>
        <CardDescription></CardDescription>
        <CardAction> <CircleDashed color="blue"/></CardAction>
      </CardHeader>
      <CardContent>
        <h1 className="text-6xl font-bold">
          {bugs.filter(bug => bug.status === "Open").length}
        </h1>
      </CardContent>

      </Card>

    {/* RESOLVED CASES */}
    <Card className={` border border-white/20 h-45 ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black"}`}>
          <CardHeader>
            <CardTitle className="text-lg">RESOLVED</CardTitle>
            <CardDescription></CardDescription>
            <CardAction><CircleCheck color="green"/></CardAction>
          </CardHeader>
          <CardContent>
            <h1 className={`text-6xl ${isDark ? "text-green-400" : "text-green-600"} font-bold`}>
              {bugs.filter(bug => bug.status === "Resolved").length}
              </h1>
          </CardContent>
          </Card>
    </div>

    <div className="grid grid-cols-[3fr_2fr] gap-4">
    {/* DATA CARDS */}
        <Card className={`border border-white/20 h-100 ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black"} min-w-0`}>
          <CardHeader>
            <CardTitle className="text-lg">BUG TREND — LAST 7 DAYS</CardTitle>
            <CardDescription></CardDescription>
            <CardAction> 
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 bg-blue-700"></div> <p className="text-base">Opened</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 bg-green-600"></div> <p className="text-base">Resolved</p>
                </div>
              </div>
              </CardAction>
          </CardHeader>
          <CardContent>
                        {/* ADDING A BAR CHART TO DATA CARD */}

            <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
              <BarChart accessibilityLayer data={bugTrend}>
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tick={{ fill: isDark?  "#ffffff" : "#000000", fontSize: 18 }}
                    tickFormatter={value => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent className={`text-base`}/>} />
                <Bar dataKey="Opened" fill="var(--color-Opened)" radius={4} />
                <Bar dataKey="resolved" fill="var(--color-resolved)" radius={4} />
              </BarChart>
            </ChartContainer>

          </CardContent>
          </Card>

          {/* BY SEVERITY */}
        <Card className={`border border-white/20 h-100 gap-3 ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black/50"} min-w-0`}>
          <CardHeader>
            <CardTitle className="text-lg font-medium">BY SEVERITY</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
               <div className=" gap-2 flex flex-col">

                {bugSeverity.map((severity) => {
                return (<Field className="w-full" key={severity.severityType}>
                  <FieldLabel htmlFor="progress-upload" className={`${severity.textcolor}  text-base`}>
                    <span> {severity.severityType} </span>
                     <span className="ml-auto text-white/50">{severity.count}</span>
                  </FieldLabel>
                <Progress className={isDark ? "bg-white/30" :  "bg-zinc-700" }value={severity.percentage} indicatorClassName={`${severity.color}`}/>
                </Field>)})}

               </div>
              </div>
          </CardContent>
          <div className="px-4 py-1">
            <div className={`h-0.5 w-full ${isDark ? "bg-white/20" : "bg-zinc-700/20"} `}></div>
          </div>
          <CardFooter className="text-base">
            <div className="flex flex-col px-4 gap-2 flex-1">

            <h1 className="text-lg font-medium ">TOP PROJECTS</h1>    
            
            {topProjects.sort().slice(0,3).map((project) => {
              return (
              <>
              <div className="flex justify-between">
                <h3>{project.name}</h3>
                <p>{project.bugs}</p>
              </div>
              </>)
            })}

            </div>
          </CardFooter>
          </Card>
  
      </div>
      <div className="grid grid-cols-1">
        <DataTable/>
    

      </div>
    </div>

  )
}

export default MainContent