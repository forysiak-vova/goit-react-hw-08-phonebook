import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {ContainerAuthNav} from './AuthNav.styles'

const AuthNav = () => {
   return (
      <>
         <ContainerAuthNav>
         <NavLink to="/register">Register</NavLink>
         <NavLink to="/login">Login</NavLink>
         </ContainerAuthNav>
         
         <Outlet/>
         
      </>
   )
}

export default AuthNav;