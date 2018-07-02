import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readPost } from '../actions/post';

import Content from '../components/Content';

class Post extends Component {
  
  render() {
    const postReducer = this.props.postReducer;

    return (
      <div>
        <Content postReducer={postReducer} />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    postReducer: state.postReducer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const id = props.match.params.id;
  const params = `/${id}?_expand=user&_embed=comments&_order=desc`;

  return {
    actions: dispatch(readPost(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);