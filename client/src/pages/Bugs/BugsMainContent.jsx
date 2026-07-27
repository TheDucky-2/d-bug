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
import { bugTrend, chartConfig} from "@/assets/assets";
import { bugSeverity } from "@/assets/assets";
import { bugs } from "@/assets/assets.js";
import { Bar, BarChart, XAxis} from "recharts"
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const BugsMainContent = () => {

  const {isDark} = useTheme();
  const [criticalCases, setCriticalCases] = useState(4);
  const [openCases, setOpenCases] = useState(6);
  const [resolvedCases, setResolvedCases] = useState(12);

  return (
    <div className="flex flex-col gap-4  py-2">
      <div className={`${isDark ? " text-white/70" : " text-black"} grid grid-cols-4 grid-rows-1 gap-4`}>
      
      {/* METRIC CARDS */}
            
      {/* BUG COUNT */}

        <Card className={`rounded-sm border h-35 border-white/10`}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">

            <CardTitle className="text-lg font-medium">
              TOTAL BUGS
            </CardTitle>
             <CardAction><Bug color={isDark ? "white" : "black"} /></CardAction>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bugs.length}
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              Count of all bugs
            </p>
          </CardContent>
        </Card>

       {/* COUNT OF CRITICAL BUGS */}

        <Card className={`rounded-sm border h-35 border-white/10`}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">

            <CardTitle className="text-lg font-medium">
              CRITICAL
            </CardTitle>
             <CardAction><TriangleAlert color="red"/></CardAction>
          </CardHeader>
          <CardContent>
        <h1 className="text-2xl text-red-400 font-bold">
          {bugs.filter(bug => bug.severity === "critical").length}
        </h1>
            <p className="text-xs text-red-500 mt-1">
              Requires immediate action
            </p>
          </CardContent>
        </Card>

        {/* OPEN CASES */}

        <Card className={`rounded-sm border h-35 border-white/10`}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">

            <CardTitle className="text-lg font-medium">
              OPEN
            </CardTitle>
             <CardAction><CircleDashed color="blue"/></CardAction>
          </CardHeader>
          <CardContent>
        <h1 className="text-2xl font-bold">
          {bugs.filter(bug => bug.status === "Open").length}
        </h1>
            <p className="text-xs text-zinc-500 mt-1">
             Bugs under investigation
            </p>
          </CardContent>
        </Card>

    {/* RESOLVED CASES */}

            <Card className={`rounded-sm border h-35 border-white/10`}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">

            <CardTitle className="text-lg font-medium">
              RESOLVED
            </CardTitle>
             <CardAction><CircleCheck color="green"/></CardAction>
          </CardHeader>
          <CardContent>
        <h1 className={`text-2xl ${isDark ? "text-green-400" : "text-green-600"} font-bold`}>
          {bugs.filter(bug => bug.status === "Resolved").length}
        </h1>
            <p className="text-xs mt-1">
             Bugs that have been resolved
            </p>
          </CardContent>
        </Card>
    </div>

    <div className="grid grid-cols-[3fr_2fr] gap-4">
    {/* DATA CARDS */}
        <Card className={`border border-white/20 h-100 ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black"} min-w-0 rounded-sm`}>
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

            <ChartContainer config={chartConfig} className="max-h-75 w-full">
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
        <Card className={`border border-white/20 h-100 gap-3 ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black/50"} min-w-0 rounded-sm`}>
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
          
          </Card>
  
      </div>
    </div>

  )
}

export default BugsMainContent