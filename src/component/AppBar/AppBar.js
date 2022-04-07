import Navigation from 'component/Navigation';
import AuthNav from 'component/AuthNav';
import UserMenu from 'component/UserMenu';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { ContainerAppBar } from './AppBar.styles';
import{ AppBar, Toolbar} from '@mui/material';

const AppBarr = () => {
   const isLoggedIn = useSelector(authSelectors.getisLoggedIn)
   return (
  
      
      <AppBar position="static">
         <Toolbar
            sx={{
             display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               textAlign: 'end',
             
         }}>
     
         <Navigation />

               {isLoggedIn ? <UserMenu /> : <AuthNav />}
             
         </Toolbar>
         
        
         </AppBar>
      
)
}

export default AppBarr;