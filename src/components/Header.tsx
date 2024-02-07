import SunIcon from '../assets/images/icon-sun.svg'
import MoonIcon from '../assets/images/icon-moon.svg'

interface HeaderProps {
  setMode: (arg: string) => void;
  mode: string;
}
const Header = ({setMode, mode}: HeaderProps) => {

  const handleClick = () => {
    return mode === 'light' ? setMode('dark') : mode === 'dark' && setMode('light')
  }

  return (
    <header className="container w-full flex justify-between items-center">
        <h1 className='font-bold text-2xl tracking-[8px] text-very-light-gray'>TODO</h1>
        <img 
          src={mode === 'dark' ? SunIcon : MoonIcon} 
          alt="light mode / dark mode" 
          className='w-[25px] h-[25px] cursor-pointer'
          onClick={() => handleClick()}  
        />
    </header>
  )
}

export default Header