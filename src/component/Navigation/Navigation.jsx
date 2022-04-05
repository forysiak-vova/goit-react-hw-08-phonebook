import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import {LinkHome} from './Navigation.styles'

const Navigation = () => {
   const isLoggedIn = useSelector(authSelectors.getisLoggedIn)
   return (
      <>
         <Typography
             variant='h6'
            sx={{ displat: 'flex', }}
            component='div'
         >
          
               
         <LinkHome to="/" style={{margin: 15}}>Home</LinkHome>
       
       
      
            {isLoggedIn && (
             

                  <LinkHome to='/contacts'>Contacts</LinkHome>
               
         )}
        </Typography>
         <Outlet/>
         
      </>
   )
}

export default Navigation;