import axios from 'axios';

import {constants} from './index';

const changeQuestionDetail = (title, description, answer) => ({
    type: constants.CHANGE_QUESTION_DETAIL,
    title: title,
    description: description,
    answer: answer,

});

export const getQuestionDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/questiondetail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeQuestionDetail(result.title, result.description, result.answer));
        }).catch(() => {

        })
    }
};

const desEditorShow = (content, is_true) => ({
    type: constants.showDescriptionEditor,
    content: content,
    is_description_editor_show: is_true,
});
const desAnswerShow = (content, is_true) => ({
    type: constants.showAnswerEditor,
    content: content,
    is_answer_editor_show: is_true,
});


export const changeDescriptionShow = (content, is_true, type) => {
    return (dispatch) => {
        if (type === 'description') {
            dispatch(desEditorShow(content, is_true))
        } else if (type === 'answer') {
            dispatch(desAnswerShow(content, is_true))
        }
    }

};
