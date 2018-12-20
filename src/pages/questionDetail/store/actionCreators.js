import axios from 'axios';

import {constants} from './index';

const changeQuestionDetail = (title, description,answer) => ({
    type: constants.CHANGE_QUESTION_DETAIL,
    title: title,
    description: description,
    answer: answer,

});

export const getQuestionDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/questiondetail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeQuestionDetail(result.title, result.description,result.answer));
        }).catch(()=>{

        })
    }
};



