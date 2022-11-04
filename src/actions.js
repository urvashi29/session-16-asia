import axios from "axios";
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

export const onGetData = () => {
    return (dispatch) => {
        let url = 'https://jsonplaceholder.typicode.com/posts/';
        axios.get(url).then((res => {

            // self-invoking function
            dispatch(
                ((data) => {
                    return {
                        type: actions.GET_POSTS,
                        payload: {
                            httpResponse: data
                        }
                    }
                })(res.data)
            )

        })).catch(err => console.log(err))
    }
}


//reference
// const onGetData = ()=> {
//     return (dispatch) => {
//         axios.get().then((res) => {
//             dispatch(
//                 ((data) => {
//                     return {}
//                 })(res.data)
//             )
//         }).catch()
//     }
// }
