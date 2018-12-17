const defaultState = {
    focused: false,
};

//创建store
export default (state = defaultState, action) => {
    if (action.type === 'search_focus') {
        return {
            focused: true,
        }
    }
    if (action.type === 'search_blur') {
        return {
            focused: false,
        }
    }
    return state;
}