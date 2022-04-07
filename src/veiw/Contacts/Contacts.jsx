import Form from 'component/Form';
import ContactList from 'component/ContactList';
import Filter from 'component/Filter'
import { Container, Spinner } from 'App.styles'
import Loader from 'react-js-loader';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contacts/contacts-operations'
import { getFilter } from 'redux/contacts/contact-selectors';
import{ Typography} from '@mui/material';

const Contacts = () => {
  const { data, isFetching } = useFetchContactsQuery();
    const filter = useSelector(getFilter);
    const [deleteContact, {isLoading, isSuccess}] = useDeleteContactMutation();
  
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = data.filter(({ name }) => name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  };

   return (
              <Container>
         <Typography variant='h2'>Phonebook</Typography>
         <Form contacts={data}/>
         <Typography variant='h2'>Contacts</Typography>
         <Filter />
         {isFetching? <Spinner>
         <Loader type="bubble-top" bgColor={"#000"} title={"loading..."} color={'#FFFFFF'} size={50} />
         </Spinner> : data && <ContactList contacts={getVisibleContacts()} ondeleteContact={deleteContact} />}
       </Container>
   );
}

export default Contacts;