import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import{ Typography} from '@mui/material';

const Navigation = () => {
   const isLoggedIn = useSelector(authSelectors.getisLoggedIn)
   return (
      <>
         <div>
            <Typography
            variant='h6'
            >
               
         <NavLink to="/">Home</NavLink>
          </Typography>
       
      
         {isLoggedIn && (
            <NavLink to='/contacts'>Contacts</NavLink>
         )}
        </div>
         <Outlet/>
         
      </>
   )
}

export default Navigation;