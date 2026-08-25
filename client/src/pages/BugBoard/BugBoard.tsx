import { useState } from "react"
import Columns from "./Columns"


const BugBoard = () => {

  const [draggedElement, setDraggedElement] = useState<HTMLElement>(null)

  return (
    <>
    <div >
        <h1 className="text-2xl font-semibold "> 
          Bug Board
        </h1>
    </div>

    <div className="pt-(--padding-vertical-lg)">
        <Columns draggedElement={draggedElement} setDraggedElement={setDraggedElement}/>
    </div>
    </>
  )
}

export default BugBoard