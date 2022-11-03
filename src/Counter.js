import React, { Component } from "react";
import { connect } from 'react-redux';
import { onIncrement } from './actions';

class Counter extends Component {
    state = {

    }

    handleInc = () => {
        this.props.onInc(2);
    }

    render() {
        return (
            <>
                {this.props.counter}
                <button onClick={this.handleInc}>Increment</button>
            </>
        )
    }
}


//get the data from store
//state is central storage area
const mapStateToProps = state => {
    return {
        counter: state.count
    }
}

//send data to reducer
const mapDispatchToProps = dispatch => {
    return {
        onInc: (val) => dispatch(onIncrement(val))

        // onInc: (val) => {
        //     return dispatch(onIncrement(val));
        // }
    }
}

// connect is a HOC
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

