import contactReducer from './contacts/contact-reduser'
import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import logger from 'redux-logger'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { contactApi } from './contacts/contacts-operations';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReduser from './auth/auth-slice'


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}).concat(logger).concat(contactApi.middleware);



export const store = configureStore({
    reducer: {
        counter: contactReducer,
        [contactApi.reducerPath]: contactApi.reducer,
         auth: persistReducer(authPersistConfig,authReduser)
},
    middleware,
    devTools: process.env.NODE_ENV === 'development',
    //   middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(contactApi.middleware),
});





export const persistor = persistStore(store);

setupListeners(store.dispatch)