import {fromJS} from 'immutable';

import {constants} from './index';

const defaultState = fromJS({
    title: '',
    description: ``,
    answer: '',
});

//创建store
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_QUESTION_DETAIL:
            return state.merge({
                title: action.title,
                description: action.description,
                answer: action.answer,
            });
        default:
            return state;
    }
}