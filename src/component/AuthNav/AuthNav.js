import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ContainerAuthNav } from './AuthNav.styles';
import{ Typography} from '@mui/material';

const AuthNav = () => {
   return (
      <>
         <Typography
            variant='h6'
            sx={{ flexGrow: 1 }}
         >
         <NavLink to="/register">Register</NavLink>
         <NavLink to="/login">Login</NavLink>
         </Typography>
         
         <Outlet />
         
         
         
      </>
   )
}

export default AuthNav;