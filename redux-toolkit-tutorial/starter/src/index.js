import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { store } from './store';
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
=======

ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> 06d4d4c65f8c8c9d0df7083ba17fac816c2fc395
  </React.StrictMode>,
  document.getElementById('root')
);
