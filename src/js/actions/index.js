import { ADD_ARTICLE, CHANGE_CURRENT_ITEM } from '../constants/action-types';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload}
};

export function changeCurrentItem(payload) {
    return { type: CHANGE_CURRENT_ITEM, payload}
};