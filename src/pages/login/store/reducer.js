import {fromJS} from 'immutable';

import {constants} from './index';

const defaultState = fromJS({
    login: false,
});

//创建store
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login',action.value);
        case constants.LOGOUT:
            return state.set('login',action.value);
        default:
            return state;
    }
}