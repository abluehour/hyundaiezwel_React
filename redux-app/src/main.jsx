import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import reducer from './component/reducer.jsx';
import { configureStore } from '@reduxjs/toolkit';

//store 생성
const store = configureStore({ reducer: reducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);