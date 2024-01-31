import SunIcon from '../assets/images/icon-sun.svg'
import MoonIcon from '../assets/images/icon-moon.svg'
const Header = () => {
  return (
    <header className="container w-full flex justify-between items-center">
        <h1 className='font-bold text-2xl tracking-[8px] text-very-light-gray'>TODO</h1>
        <img src={SunIcon} alt="light mode / dark mode" className='w-[30px] h-[30px]'/>
    </header>
  )
}

export default Header