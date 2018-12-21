import {fromJS} from 'immutable'

import {constants} from './index'


const defaultState = fromJS({
    showScroll: false,
    editorValue: '',
    savedValue: '',
});

//创建store
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.IS_TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.showScroll);
        case constants.CHANGE_EDITOR_VALUE:
            return state.merge({
                'editorValue': action.editorValue,
            });
        case constants.SAVE_CHANGE:
            return state.set('savedValue', action.savedValue);
        default:
            return state;
    }
}