import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onGetData } from './actions';

class ApiData extends Component {

    componentDidMount = () => {
        this.props.onGetPosts();
    }

    render() {
        const postList = this.props.posts.length ? (this.props.posts.map(info => {
            return (
                <React.Fragment>
                    {info.title}
                </React.Fragment>
            )
        })) : ('')

        return (
            <div>
                {postList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPosts: () => dispatch(onGetData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiData);


// suspense in reactjs
// 16.6 version reactjs
// react-18 data fetching