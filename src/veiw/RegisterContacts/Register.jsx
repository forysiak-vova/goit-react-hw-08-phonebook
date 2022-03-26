import { useState } from "react";
import { useDispatch } from "react-redux";
import {register} from '../../redux/auth/auth-operations'

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
      <form onSubmit={handelSubmit}>
         <label>
            <h4>name</h4>
            <input
               type='name'
               name="name"
                 required
               value={name}
               onChange={handelChange}
             />
         </label>
         <label>
              <h4>email</h4>
              <input
               type='email'
               name="email"
               value={email}
               onChange={handelChange}
            />
         </label>
         <label>
             <h4>password</h4>
            <input
               type='password'
               name='password'
             value={password}
             onChange={handelChange}
            />
         </label>
        
         <button type='submit'>sing up</button>
      </form>
   )
   
}

export default Register;