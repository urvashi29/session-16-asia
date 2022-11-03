import * as actions from "./actionType"

//action methods
export const onIncrement = (val) => {
    console.log(val);
    
    return {
        type: actions.INC,
        payload: val
    }
}

export const onDecrement = (d) => {
    console.log(d);

    return {
        type: actions.DEC,
        payload: d
    }
}