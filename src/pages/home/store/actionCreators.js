import axios from 'axios';
import {fromJS} from "immutable";

import {constants} from './index';


const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
});

const getMoreListData = (list, nextPage) => ({
    type: constants.GET_MORE_LIST_DATA,
    list: fromJS(list),
    nextPage: nextPage,
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('./api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('./api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(getMoreListData(result, page + 1));
        })
    }
};

export const toggleTopShow = (isShow) => ({
    type: constants.IS_TOGGLE_TOP_SHOW,
    showScroll: isShow,
});
