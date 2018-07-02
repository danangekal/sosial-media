import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterFriends } from '../actions/friend';

import Content from '../components/Content';

class Friend extends Component {
  
  render() {
    const friendReducer = this.props.friendReducer;

    return (
      <div>
        <Content friendReducer={friendReducer} />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    friendReducer: state.friendReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  const login = localStorage.getItem('login');
  const id = login? login.id:1;
  const params = `?id_ne${id}`;

  return {
    actions: dispatch(filterFriends(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend);