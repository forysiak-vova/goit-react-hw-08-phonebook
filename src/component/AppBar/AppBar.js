import Navigation from 'component/Navigation';
import AuthNav from 'component/AuthNav';
import UserMenu from 'component/UserMenu';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const AppBar = () => {
   const isLoggedIn = useSelector(authSelectors.getisLoggedIn)
   return (
      <>
         <Navigation />

         {isLoggedIn ? <UserMenu /> :  <AuthNav />}
         
        
      </>
)
}

export default AppBar;