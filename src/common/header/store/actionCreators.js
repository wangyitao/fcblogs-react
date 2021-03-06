import axios from 'axios';
import {fromJS} from "immutable";

import {constants} from './index';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR,
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            //成功的时候执行
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(() => {
            //失败的时候执行
        });
    }
};

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER,
});
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE,
});
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page: page,
});

export const active=(active_id)=>({
    type:constants.CHANGE_ACTIVE_ID,
    active_id: fromJS(active_id),
});
