import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
   const isLoggedIn = useSelector(authSelectors.getisLoggedIn)
   return (
      <>
         <NavLink to="/">Home</NavLink>

         {isLoggedIn && (
            <NavLink to='/contacts'>Contacts</NavLink>
         )}
      
         <Outlet/>
         
      </>
   )
}

export default Navigation;