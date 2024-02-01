import { useState } from "react"
import Container from "./components/Container"
import { TodoList } from "./interfaces/interfaces"


const tasks = [
  {id: 0, task: 'Alguma coisa', checked: false},
  {id: 1, task: 'Alguma coisa', checked: false},
  {id: 2, task: 'Alguma coisa', checked: false}
]

function App() {

  const [list, setList] = useState<TodoList[]>(tasks)
  return (
    <div className="w-[100vw] min-h-[100vh] bg-very-light-grayish-blue bg-background-light-mobile bg-no-repeat bg-contain flex justify-center pt-12">
      <Container list={list} setList={setList} />
    </div>
  )
}

export default App
