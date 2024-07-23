import { useState } from "react"
import { OpenMeteo } from "../components/open-meteo"

function App() {
  const [statusShow, setStatusShow] = useState<string>("day")
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button onClick={() => setStatusShow("day")}>1 день</button>
      <OpenMeteo statusShow={statusShow} />
    </div>
  )
}

export default App
