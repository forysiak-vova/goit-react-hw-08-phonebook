import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
   set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
   },
   unset() {
      axios.defaults.headers.common.Authorization = '';
   },
}


export const register = createAsyncThunk(
   'auth/register',
   async credentials => {
      try {
         const { data } = await axios.post('/users/signup', credentials);
         token.set(data.token)
         return data;
      } catch (error) {
         console.log(error.message)
      }
   }
);

export const login = createAsyncThunk(
   'auth/login',
   async credential => {
      try {
         const { data } = await axios.post('/users/login', credential);
           token.set(data.token)
         return data;
      } catch (error) {
         console.log(error.message)
      }
   }
);

export const logOut = createAsyncThunk(
   'auth/logout',
   async () => {
      try {
         await axios.post('/users/logout')
         token.unset()
      } catch (error) {
         console.log(error.message)
      }
   }
)