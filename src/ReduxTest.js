import React from 'react';
// this is just for testing redux from browser console - see file for info
import { Provider } from 'react-redux';
import AppRedux from './AppRedux.jsx';
import store from './js/store/index'

// testing redux
// this just uses the Provider HOC to wrap the app and provide the redux store to it
export default () => <Provider store={store}>
<AppRedux/>
</Provider>;
