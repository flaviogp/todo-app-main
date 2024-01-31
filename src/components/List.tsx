import CrossIcon from '../assets/images/icon-cross.svg'
interface ListProps {
    list: string[],
    setList: (arg:string) => void
}

const List = ({list, setList}: ListProps) => {
  return (
    <ul className='container flex flex-col bg-very-light-gray rounded-md'>
    { list.length >= 1 && list.map((todo, index) => (
            <li 
                key={`${todo}-${index}`}
                className='flex w-full gap-5 bg-transparent border-t-2 h-[50px] items-center justify-between p-5'
            >
                <label htmlFor={`item-${index}`} className='flex gap-5 cursor-pointer'>
                    <input 
                        type="checkbox" 
                        name="item" 
                        id={`item-${index}`} 
                        className=' relative appearance-none mr-[10px]
                            after:w-[20px] after:h-[20px] after:border-2
                            after:absolute after:top-[2px] 
                            after:left-0 after:rounded-full
                            after:content-check
                            after:bg-gradient-to-b from-bg-checkbackground-gradient-top to-bg-checkbackground-gradient-bottom
                            '
                    />
                    <p>{todo}</p>
                </label>
                <img src={CrossIcon} alt="remove todo"  className='w-[17px] h-[17px] flex justify-self-end cursor-pointer'/>
            </li>
        ))
    }
    </ul>
  )
}

export default List