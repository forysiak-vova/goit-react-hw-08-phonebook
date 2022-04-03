import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'modern-normalize/modern-normalize.css';
import {store, persistor} from './redux/store'
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
        </HashRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
