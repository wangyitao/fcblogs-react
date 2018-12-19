import axios from 'axios';

import {constants} from './index';
import {fromJS} from "immutable";

const changeQuestionData = (result) => ({
    type: constants.CHANGE_QUESTIONDATA,
    questions: fromJS(result),
});

export const  getQuestionData =()=>{
  return (dispatch)=>{
      axios.get('/api/questions.json').then((res)=>{
        const result = res.data.data;
        dispatch(changeQuestionData(result))
      })
  }
};


const getQuestionListData = (list, nextPage) => ({
    type: constants.GET_QUESTION_LIST_DATA,
    questions: fromJS(list),
    nextPage: nextPage,
});

export const getMoreQuestions = (page) => {
    return (dispatch) => {
        axios.get('./api/questionList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(getQuestionListData(result, page + 1));
        })
    }
};


