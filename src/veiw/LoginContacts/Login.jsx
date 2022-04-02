import { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from '../../redux/auth/auth-operations'

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
      <form onSubmit={handelSubmit}>
         <label>
            <h4>email</h4>
            <input
               type='email'
               name="email"
               required
               value={email}
               onChange={handelChange}
            />
         </label>
         <label>
            <h4>password</h4>
            <input
               type='password'
               name="password"
               required
               value={password}
                 onChange={handelChange}
            />
            <button type="submit">login</button>
         </label>
      </form>
   )
}

export default Login;