import React from 'react'
import ReactDOM from 'react-dom/client';
// import { PaypalScriptProvider } from '@paypal/react-paypal-js';
import './index.css';
import './assets/index2.css';
import './assets/bootstrap.custom.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from './store.js';
import { Provider } from 'react-redux';
import Router from './Router';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PaypalScriptProvider deferLoading={true}> */}
      <Router />
     <ToastContainer />
      {/* </PaypalScriptProvider> */}
    </Provider>
  </React.StrictMode>
);
