import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'modern-normalize/modern-normalize.css';
import {store, persistor} from './redux/store'
import { Provider } from "react-redux";
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0000FF'
    },
   
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
        <App />
          </ThemeProvider>
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
