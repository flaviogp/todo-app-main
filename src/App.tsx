import { useState } from "react"
import Container from "./components/Container"
function App() {

  const [list, setList] = useState<string[]>(['Complete Todo App on Frontend mentor'])
  return (
    <div className="w-[100vw] min-h-[100vh] bg-background-light-mobile bg-no-repeat bg-contain flex justify-center pt-12">
      <Container list={list} setList={setList} />
    </div>
  )
}

export default App
