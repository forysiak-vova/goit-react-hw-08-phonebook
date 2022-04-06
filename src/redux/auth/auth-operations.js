import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
   set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
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
         toast.success('Welcome!')
         return data;
      } catch (error) {
         toast.error('Registration error, please try again')
      }
   }
);

export const login = createAsyncThunk(
   'auth/login',
   async credential => {
      try {
         const { data } = await axios.post('/users/login', credential);
         token.set(data.token)
         toast.success('Welcome!')
         return data;
      } catch (error) {
         toast.error('Incorrect password or login, try again')
      }
   }
);

export const logOut = createAsyncThunk(
   'auth/logout',
   async () => {
      try {
         await axios.post('/users/logout')
         token.unset()
         toast.success('Logged correctly')
      } catch (error) {
          toast.error('Logging error, please try again')
      }
   }
);

export const fetchCurrentUser = createAsyncThunk(
   'auth/refresh',
   async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
         return thunkAPI.rejectWithValue();
         // return state;
         // return;
      };
      token.set(persistedToken);
      try {
         const {data} = await axios.get('/users/current');
         return data;
      } catch (error) {
          toast.error(error.message)
      }
      
   }
) 
