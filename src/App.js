import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HomeContacts from './veiw/HomeContacts';
import Register from './veiw/RegisterContacts';
import Login from './veiw/LoginContacts';
import AppBar from './component/AppBar';
import Contacts from './veiw/Contacts';
import {fetchCurrentUser} from './redux/auth/auth-operations'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
     return (     
       <>
       <AppBar />
       <Routes>
           {/* <Route path="/" element={<AppBar />}> */}
             <Route path="/" element={<HomeContacts />} />
             <Route path='register' element={<Register />} />
             <Route path='login' element={<Login />} />
             <Route path='contacts' element={<Contacts />}/>
         {/* </Route> */}
        
       </Routes>
       </>
      //  
  )
}

export default App;