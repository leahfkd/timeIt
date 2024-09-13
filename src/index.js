/*
 * Created Date: 2024-09-11T19:34:55                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-11T19:34:56                                          *
 */



import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import { Provider } from 'react-redux';
import { store } from './configureStore'
import './assets/index.css'
import './assets/tailwind.css'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

