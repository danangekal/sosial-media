import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterPosts } from '../actions/home';

import Content from '../components/Content';

class Home extends Component {
  
  handleSubmitPost = (value) => {
    alert('tes');
    // console.log(value);
  }
  
  render() {
    const homeReducer = this.props.homeReducer;
    
    return (
      <div>
        <Content {...this.props} onSubmit={this.handleSubmitPost} homeReducer={homeReducer} />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    homeReducer: state.homeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  const params = `?_expand=user&_embed=comments&_order=desc`;

  return {
    actions: dispatch(filterPosts(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);