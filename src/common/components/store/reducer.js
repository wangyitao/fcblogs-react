import {fromJS} from 'immutable'

import {constants} from './index'


const defaultState = fromJS({
    showScroll: false,
});

//创建store
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.IS_TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.showScroll);
        default:
            return state;
    }
}