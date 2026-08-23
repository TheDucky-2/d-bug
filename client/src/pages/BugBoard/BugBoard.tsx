import Columns from "./Columns"


const BugBoard = () => {
  return (
    <>
    <div >
        <h1 className="text-2xl font-semibold "> 
          Bug Board
        </h1>
    </div>

    <div className="mt-8">
        <Columns/>
    </div>
    </>
  )
}

export default BugBoard