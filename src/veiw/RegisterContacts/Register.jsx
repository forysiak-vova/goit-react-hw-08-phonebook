import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from '../../redux/auth/auth-operations'
import { RegisterForm } from './Register.styles';
import {TextField} from '@mui/material';

const Register = () => {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handelChange = e => {
      const { name, value } = e.currentTarget;

      switch (name) {
         case 'name':
            setName(value);
            break;
         case 'email':
            setEmail(value);
            break;
         case 'password':
            setPassword(value);
            break;
         default:
            return;
      }
   };

   const handelSubmit = e => {
      e.preventDefault()
      dispatch(register({name, email, password}))

      setName('');
      setEmail('');
      setPassword('');

   }
   
   return (
      <RegisterForm onSubmit={handelSubmit}>
         <label>
            <TextField
                label='name'
               variant="standard"
               type='name'
               name="name"
                 required
               value={name}
               onChange={handelChange}
                sx={{mt: '1rem', width: '35ch'}}
             />
         </label>
         <label>
            <TextField
                label='email'
               variant="standard"
               type='email'
               name="email"
               value={email}
               onChange={handelChange}
                sx={{mt: '1rem', width: '35ch'}}
            />
         </label>
         <label>
            <TextField
                label='password'
               variant="standard"
               type='password'
               name='password'
             value={password}
               onChange={handelChange}
                sx={{mt: '1rem', width: '35ch'}}
            />
         </label>
        
         <button type='submit'>sing up</button>
      </RegisterForm>
   )
   
}

export default Register;