import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <>
         <nav>

         <NavLink to="/">Home</NavLink>
         <NavLink to="/register">Register</NavLink>
         <NavLink to="/login">Login</NavLink>
         </nav>
         <Outlet/>
         
      </>
   )
}

export default Navigation;