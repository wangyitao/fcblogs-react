import {fromJS} from 'immutable';

import {constants} from './index';

const defaultState = fromJS({
    title: '',
    description: ``,
    answer: '',
    is_description_editor_show: false,
    is_answer_editor_show: false,
    editorDescriptionContent:'',
    editorAnswerContent:'',
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
        case constants.showDescriptionEditor:
            return state.merge({
                is_description_editor_show: action.is_description_editor_show,
                editorDescriptionContent: action.content
            });
        case constants.showAnswerEditor:
            return state.merge({
                is_answer_editor_show: action.is_answer_editor_show,
                editorAnswerContent: action.content
            });
        default:
            return state;
    }
}