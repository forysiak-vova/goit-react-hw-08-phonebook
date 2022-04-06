import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AppBarr from 'component/AppBar';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from 'component/UserMenu/PrivateRoute';
import PublicRoute from 'component/UserMenu/PublicRoute';
import authSelectors from './redux/auth/auth-selectors'
import { Toaster } from 'react-hot-toast';
import Loader from 'react-js-loader';
import { lazy, Suspense } from "react";


const HomeContacts = lazy(() =>
  import("veiw/HomeContacts" /* webpackChunkName: "home-page" */)
);
const Contacts = lazy(() =>
  import("veiw/Contacts" /* webpackChunkName: "contacts-page" */)
);
const Login = lazy(() =>
  import("veiw/LoginContacts" /* webpackChunkName: "login-page" */)
);
const Register = lazy(() =>
  import("veiw/RegisterContacts" /* webpackChunkName: "register-page" */)
);


const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUse = useSelector(authSelectors.getFetchingCurrentUser);
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
     return (     
       isFetchingCurrentUse ? <Loader type="hourglass" bgColor={"#000"} title={"loading..."} color={'#FFFFFF'} size={100}/> : (
         <>
           <AppBarr />
           <Suspense fallback={<Loader type="hourglass" bgColor={"#000"} title={"loading..."} color={'#FFFFFF'} size={100}/>}>
           <Routes>
               {/* <Route path="/" element={<AppBar />}> */}
              <Route path="/"
               element={
               <PublicRoute
                 component={<HomeContacts />}
               />
              } />
           
              <Route path='/contacts'
             element={
               <PrivateRoute
                 component={<Contacts />}
                 navigateTo="/login"
               />  
               }/>
           
           <Route
             path='/register'
             element={
               <PublicRoute
                 component={<Register />}
                 navigateTo='/contacts'
                 restricted
               />
             }
           />
           
           <Route path='/login'
             element={
               <PublicRoute
                 component={<Login />}
                 navigateTo='/contacts'
                 restricted
               />
              } />
           
         
         {/* </Route> */}
        
             </Routes>
             </Suspense>
       <Toaster position="top-right"/>
       </>
      // 
       ) 
     )
}

export default App;