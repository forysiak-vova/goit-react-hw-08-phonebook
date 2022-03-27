import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <>
    

         <NavLink to="/">Home</NavLink>
      
         <Outlet/>
         
      </>
   )
}

export default Navigation;