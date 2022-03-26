import { useDispatch, useSelector } from "react-redux";
import authSelectors from '../../redux/auth/auth-selectors'


const UserMenu = () => {
   const dispatch = useDispatch();
   const name = useSelector(authSelectors.getUserName)

   return (
      <div>
         <span>Ласкаво просимо {name}</span>
         <button type="button">Log Out</button>
      </div>
   )
}