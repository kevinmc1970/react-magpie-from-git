import { ADD_ARTICLE, CHANGE_CURRENT_ITEM } from '../constants/action-types';

// state is immuatable
const initialState = {
    articles: [],
    currentItem: null
};

// assign merges the state object with the updated articles array
// note the 'target' here is the new {} object and the initial state is unchanged
// concat creates a new array whereas push adds to existing array
function rootReducer(state = initialState, action) {
    console.log(action)
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === CHANGE_CURRENT_ITEM) {
        console.log(CHANGE_CURRENT_ITEM);
        return {
            currentItem: action.payload
        };
    }
    return state;
}

export default rootReducer;