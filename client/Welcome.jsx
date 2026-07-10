

const Welcome = ({nextStep}) => {
  return (
    <div className="flex flex-col w-full bg-red-400">
      
      <div>
        <h1>Ready to start?</h1>
      </div>

      <p className="text-zinc-500">
        Set up your workspace and start managing bugs.
      </p>

      <div>
        <button onClick={nextStep}>
          {"Get Started"}
        </button>
      </div>


    </div>
  )
}

export default Welcome