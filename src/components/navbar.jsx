import { NavLink } from 'react-router-dom';


const Navbar = () =>{
    return(
        <header className='header flex items-center justify-center gap-7  '>
            <nav className='"flex text-lg gap-7 font-medium "'>
                <NavLink to ='/' className={({isActive}) => isActive?'text-blue-500' : 'text-black'}>
                   <p className={({isActive}) => isActive?'text-blue-500' : 'text-black'}>Home</p>
                </NavLink>
            </nav>
            <nav className='flex text-lg gap-7 font-medium  '>
                <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                <p >About</p>
                </NavLink>
            </nav>
            <nav className='flex text-lg gap-7 font-medium '>
               <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                  <p>Projects</p> 
               </NavLink>
            </nav>
        
        </header>
    )

}

export default Navbar;