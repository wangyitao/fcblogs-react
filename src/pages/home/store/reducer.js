import {fromJS} from 'immutable';

import {constants} from './index';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
});

//创建store
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                'topicList': fromJS(action.topicList),
                'articleList': fromJS(action.articleList),
                'recommendList': fromJS(action.recommendList),
            });
        case constants.GET_MORE_LIST_DATA:
            return state.merge({
                    'articleList': state.get('articleList').concat(action.list),
                    'articlePage': action.nextPage,
                }
            );
        case constants.IS_TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.showScroll);
        default:
            return state;
    }
}