import {combineReducers} from 'redux-immutable';

import {reducer as headerReducer} from '../common/header/store/';
import {reducer as ComponentsReducer} from '../common/components/store/';
import {reducer as HomeReducer} from '../pages/home/store'
import {reducer as DetailReducer} from '../pages/detail/store'
import {reducer as LoginReducer} from '../pages/login/store'
import {reducer as QuestionReducer} from '../pages/question/store'
import {reducer as QuestionDetailReducer} from '../pages/questionDetail/store'

const reducer = combineReducers({
    header: headerReducer,
    home: HomeReducer,
    detail: DetailReducer,
    login: LoginReducer,
    question: QuestionReducer,
    component: ComponentsReducer,
    questionDetail: QuestionDetailReducer,
});

export default reducer;