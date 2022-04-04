import React, { useState } from "react";
import { Label, Input, Button} from './Form.styles'
import { useCreateContactMutation } from 'redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import {TextField} from '@mui/material';


const Form = ({contacts}) => {
   const [createContact] = useCreateContactMutation()
   const [name, setName] = useState('')
   const [number, setNumber] = useState('')
    const handelChange = e => {
       const { name, value } = e.currentTarget;
      
        switch (name) {
           case 'name':
              setName(value);
              break;
           case 'number':
              setNumber(value);
              break;
           default:
              return;
 }
   };

   
  const handelSubmit = e => {
     e.preventDefault();
//  createContact({name,number}).then(console.log)
         const ReturnName = contacts.find(contact => contact.name === name);

    if (ReturnName) {
      alert('This name is already in the phone book ');
    } else {
   createContact({name,number}).then(console.log)
    }
     setName('')
     setNumber('')
   };
      return (
         <form onSubmit={handelSubmit}>
            <Label>
           
               <TextField
                  label='name'
                  type="text"
                 name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                   value={name}
                  onChange={handelChange}
                  sx={{mt: '1rem', width: '35ch'}}
        />
         </Label>
            <Label>
             
               <TextField
             label='phone'
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
             value={number}
                  onChange={handelChange}
                  sx={{mt: '1rem', width: '35ch'}}
           />
         </Label>
            <Button type='submit'>Add Contact</Button>
      </form>
      )
   
}

Form.propType = {
   contacts: PropTypes.array.isRequired
}

export default Form;