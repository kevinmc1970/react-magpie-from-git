import store from '../js/store/index';
import { addArticle } from '../js/actions/index';

// this file just for testing redux in browser console
// this is just making the functions above global
// need to umcomment import in /src/index.js
window.store = store;
window.addArticle = addArticle;

// from console can run methods on store object
// if running AppRedux code will see the page change automatically (like 2-way data-binding in angular)
// store.getState()
// store.subscribe(() => console.log('Look ma, Redux!!'))
// store.dispatch( addArticle({title : 'React Redux Tutorial For Beginners', id: 1}) );