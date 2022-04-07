import { useDispatch, useSelector } from "react-redux";
import authSelectors from 'redux/auth/auth-selectors';
import { ContainerUserMenu, SpanUserMenu } from './UserMenu.styles';
import { logOut } from 'redux/auth/auth-operations';
import{ Stack, Button } from '@mui/material';
// import { NavLink } from 'react-router-dom';

const UserMenu = () => {
   const dispatch = useDispatch();
   // const name = useSelector(authSelectors.getUserName);
   const isLoggIn = useSelector(authSelectors.getisLoggedIn)

   return (
       isLoggIn && 
           <>
      <ContainerUserMenu>
            <SpanUserMenu>Hello </SpanUserMenu>
             <Stack spacing={2} direction="row">
            <Button type="button" variant="contained" onClick={() => dispatch(logOut())}>Log Out</Button>
             </Stack>
      </ContainerUserMenu>
      </>
    
   )
};

export default UserMenu;