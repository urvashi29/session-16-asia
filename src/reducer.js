import * as actions from './actionType';

//central storage (state)
const initState = {
    count: 0,
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
        default:
            return state;
    }

}

export default reducer;