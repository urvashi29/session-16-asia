import * as actions from './actionType';

//central storage (state)
const initState = {
    count: 0,
    posts: []
}


// reducer is a function and return application state
const reducer = (state = initState, action) => {
    console.log(action);//action is a object

    switch (action.type) {
        case actions.INC:
            console.log(action);
            return { ...state, count: state.count + action.payload }
        case actions.DEC:
            return { ...state, count: state.count - action.payload }
        case actions.GET_POSTS:
            console.log(action.payload.httpResponse);
            return { ...state, posts: action.payload.httpResponse }
        default:
            return state;
    }

}

export default reducer;