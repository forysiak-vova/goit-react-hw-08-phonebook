import { useDispatch, useSelector } from "react-redux";
import authSelectors from '../../redux/auth/auth-selectors';
import { ContainerUserMenu } from './UserMenu.styles';
import {logOut} from '../../redux/auth/auth-operations'


const UserMenu = () => {
   const dispatch = useDispatch();
   const name = useSelector(authSelectors.getUserName)

   return (
      <ContainerUserMenu>
         <span>Ласкаво просимо {name}</span>
         <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
      </ContainerUserMenu>
   )
};

export default UserMenu;