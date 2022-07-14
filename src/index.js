import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {configureStore,combineReducers} from "@reduxjs/toolkit";
import App from './App';

//reducers
import authReducers from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/userSlice';

const reducer = combineReducers({
  auth:authReducers,
  bug:bugReducer,
  user:userReducer
})

const store = configureStore({
  reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


