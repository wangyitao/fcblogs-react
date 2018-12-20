import {fromJS} from 'immutable';

import {constants} from './index';

const defaultState = fromJS({
    questions: [],
    questionsPage: 1,
});

//创建store
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_QUESTIONDATA:
            return state.set('questions', action.questions);
        case constants.GET_QUESTION_LIST_DATA:
            return state.merge({
                questions: state.get('questions').concat(action.questions),
                questionsPage: action.nextPage,
            });
        default:
            return state;
    }
}