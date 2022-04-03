import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';


export default function PrivateRoute({
   component,
   navigateTo = '/'
}) {
   const isLoggedIn = useSelector(authSelectors.getisLoggedIn);

   return  isLoggedIn ? component : <Navigate to={navigateTo} /> 
     
}