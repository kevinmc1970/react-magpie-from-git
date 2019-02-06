import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// N.B. dont need braces for own components - because they are the default component in that file
import App from './App'
// this is just for testing redux from browser console - see file for info
// import index from './js/index';
// converting this app into a redux app by using Provider HOC
import { Provider } from 'react-redux';
import store from './js/store/index'

// wrapping App in a Router because it only takes 1 argument and think can then just use Switch/Route anywhere in app
// also wraps the Provider hoc of the redux store
render((
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'))