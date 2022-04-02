import { useDispatch, useSelector } from "react-redux";
import authSelectors from 'redux/auth/auth-selectors';
import { ContainerUserMenu } from './UserMenu.styles';
import { logOut } from 'redux/auth/auth-operations';
// import { NavLink } from 'react-router-dom';

const UserMenu = () => {
   const dispatch = useDispatch();
   const name = useSelector(authSelectors.getUserName)

   return (
      <>
      <ContainerUserMenu>
         <span>Hello {name}</span>
         <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
      </ContainerUserMenu>
    {/* <NavLink to='/contacts'>Contacts</NavLink> */}
      </>
   )
};

export default UserMenu;