import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import PropTypes from 'prop-types';

export default function PublicRoute({ component, navigateTo = '/', restricted = false }) {
   const isLoggedIn = useSelector(authSelectors.getisLoggedIn);

   const shouldRedirect = isLoggedIn && restricted;
   
    return  !shouldRedirect ? component : <Navigate to={navigateTo} /> 
};

PublicRoute.propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    navigateTo: PropTypes.string,
    restricted: PropTypes.bool,
}