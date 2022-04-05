import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../../redux/auth/auth-operations'
import { LoginForm } from './Login.styles';
import { TextField } from '@mui/material';
import{ Button } from '@mui/material';

const Login = () => {
   const dispatch = useDispatch();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
   
   const handelChange = e => {
      const { value, name } = e.currentTarget;

      switch (name) {
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
      e.preventDefault();
      console.log(email,password)
      dispatch(login({email, password}))
      setEmail('');
       setPassword('')
   }
   
   return (
      <LoginForm onSubmit={handelSubmit}>
         <label>
            <TextField
               label='email'
               variant="standard"
               type='email'
               name="email"
               required
               value={email}
               onChange={handelChange}
                sx={{ width: '35ch'}}
            />
         </label>
         <label>
            <TextField
                label='password'
               variant="standard"
               type='password'
               name="password"
               required
               value={password}
               onChange={handelChange}
               sx={{mt: '1rem', width: '35ch'}}
            />
         </label>
            <Button variant="text" sx = {{mt: '1.5rem'}} type="submit">login</Button>
      </LoginForm>
   )
}

export default Login;