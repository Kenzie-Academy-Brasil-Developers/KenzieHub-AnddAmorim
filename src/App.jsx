import { Toaster } from "react-hot-toast"
import { Homepage } from "./components/Homepage"

const App = () => {
  return (
    <>
      <Homepage />
      <Toaster
        position="top-right"
        reverseOrder={false} />
    </>
  )
}

export default App
