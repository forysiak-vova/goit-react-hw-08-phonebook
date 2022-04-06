import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import PropTypes from 'prop-types';
import { PestControl } from "@mui/icons-material";


export default function PrivateRoute({
   component,
   navigateTo = '/'
}) {
   const isLoggedIn = useSelector(authSelectors.getisLoggedIn);

   return  isLoggedIn ? component : <Navigate to={navigateTo} /> 
     
}

PrivateRoute.propTypes = {
   component: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
   ]).isRequired,

   navigateTo: PropTypes.string,
};