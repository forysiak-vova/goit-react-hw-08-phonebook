import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import HomeContacts from 'veiw/HomeContacts';
import Register from 'veiw/RegisterContacts';
import Login from 'veiw/LoginContacts';
import AppBar from 'component/AppBar';
import Contacts from 'veiw/Contacts';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from 'component/UserMenu/PrivateRoute';
import PublicRoute from 'component/UserMenu/PublicRoute';
import authSelectors from './redux/auth/auth-selectors'


const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUse = useSelector(authSelectors.getFetchingCurrentUser)
  console.log(isFetchingCurrentUse);
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
     return (     
       isFetchingCurrentUse ? <h1>skeleton</h1> : (
         <>
       <AppBar />
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
       </>
      // 
       ) 
  )
}

export default App;