import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link } from './AuthNav.styles';
import{ Typography} from '@mui/material';

const AuthNav = () => {
   return (
      <>
         <Typography
            variant='h6'
            sx={{ flexGrow: 1 }}
            component='div'
         >
         <Link to="/register" style={{marginRight: '15px'}}>Register</Link>
         <Link to="/login">Login</Link>
         </Typography>
         
         <Outlet />
         
         
         
      </>
   )
}

export default AuthNav;