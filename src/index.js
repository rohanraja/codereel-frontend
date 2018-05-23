import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {configureStore, store} from './store';
import initialState from './store/initialState'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// const store = configureStore(initialState);


ReactDOM.render(
   <Provider store={store}>
  <MuiThemeProvider>
 <App />
  </MuiThemeProvider>
 </Provider>
  , document.getElementById('root'));
registerServiceWorker();
