import {fromJS} from 'immutable';

import {constants} from './index';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
});

//创建store
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            console.log(action);
            return state.merge({
                'topicList':fromJS(action.topicList),
                'articleList':fromJS(action.articleList),
                'recommendList':fromJS(action.recommendList),
            });
        default:
            return state;
    }
}