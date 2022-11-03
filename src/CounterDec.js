import React, { Component } from "react";
import { connect } from "react-redux";
import { onDecrement } from "./actions";

class CounterDec extends Component {

    handleDec = () => {
        this.props.onDec(1);
    }

    render() {
        return (
            <>
                <button onClick={this.handleDec}>Decrement</button>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDec: (d) => dispatch(onDecrement(d))
    }
}

export default connect(null, mapDispatchToProps)(CounterDec);


// var obj = {
//     fullName: (a) => return a
// }

// var r = obj.fullName(10);