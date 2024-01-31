
import Input from './Input'
import List from './List'

interface MainProps {
    list: string[],
    setList: (arg:string) => void
}

const Main = ({list, setList}: MainProps) => {
  return (
    <main className="container max-w-[600px] w-full flex flex-col gap-5 ">
        <Input setList={setList}/>
        <List list={list} setList={setList}/>
    </main>
  )
}

export default Main