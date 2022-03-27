import Form from './component/Form';
import ContactList from './component/ContactList';
import Filter from './component/Filter'
import { Container, Spinner } from './App.styles'
import { useSelector } from 'react-redux';
import Loader from 'react-js-loader'
import { useFetchContactsQuery, useDeleteContactMutation } from './redux/contacts/contacts-operations'
import { getFilter } from './redux/contacts/contact-selectors';
import { Routes, Route } from 'react-router-dom';
import Navigation from 'component/Navigation';
import HomeContacts from './veiw/HomeContacts';
import Register from './veiw/RegisterContacts';
import Login from './veiw/LoginContacts';
import AppBar from './component/AppBar'


const App = () => {
    const { data, isFetching } = useFetchContactsQuery();
    const filter = useSelector(getFilter);
    const [deleteContact, {isLoading, isSuccess}] = useDeleteContactMutation();
  
    const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
      );
      return visibleContacts;
  }
     return (     
      //    <Container>
      //    <h1>Phonebook</h1>
      //    <Form contacts={data}/>
      //    <h2>Contacts</h2>
      //    <Filter />
      //    {isFetching? <Spinner>
      //    <Loader type="bubble-top" bgColor={"#000"} title={"loading..."} color={'#FFFFFF'} size={50} />
      //    </Spinner> : data && <ContactList contacts={getVisibleContacts()} ondeleteContact={deleteContact} />}
      //  </Container>
       <>
       <AppBar />
       <Routes>
           {/* <Route path="/" element={<AppBar />}> */}
             <Route path="/" element={<HomeContacts />} />
             <Route path='register' element={<Register />} />
             <Route path='login' element={<Login/>}/>
         {/* </Route> */}
        
       </Routes>
       </>
      //  
  )
}

export default App;