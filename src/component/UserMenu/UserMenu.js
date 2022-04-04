import { useDispatch, useSelector } from "react-redux";
import authSelectors from 'redux/auth/auth-selectors';
import { ContainerUserMenu, SpanUserMenu } from './UserMenu.styles';
import { logOut } from 'redux/auth/auth-operations';
// import { NavLink } from 'react-router-dom';

const UserMenu = () => {
   const dispatch = useDispatch();
   const name = useSelector(authSelectors.getUserName);
   const isLoggIn = useSelector(authSelectors.getisLoggedIn)

   return (
       isLoggIn && 
           <>
      <ContainerUserMenu>
            <SpanUserMenu>Hello {name}</SpanUserMenu>
         <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
      </ContainerUserMenu>
      </>
    
   )
};

export default UserMenu;