import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onIncrement } from './actions';

const CounterFunction = () => {
    // useSelector((state)=> {
    //     return state.count
    // })

    const counter = useSelector((state) => state.count);//this is similar to mapStatetoProps
    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch();//similar mapDispatchToProps

    const handleInc = () => {
        dispatch(onIncrement(2));
    }

    return (
        <div>
            {counter}
            <button onClick={handleInc}>Inc</button>
        </div>
    );
};

export default CounterFunction;