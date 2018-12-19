import {constants} from './index';

export const toggleTopShow = (isShow) => ({
    type: constants.IS_TOGGLE_TOP_SHOW,
    showScroll: isShow,
});