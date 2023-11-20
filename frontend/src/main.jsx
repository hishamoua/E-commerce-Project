import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/index2.css'
import './assets/bootstrap.custom.css'
import {store} from './store.js'
import { Provider } from 'react-redux'
import Router from './Router'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router />
    </Provider>
  </React.StrictMode>
);
