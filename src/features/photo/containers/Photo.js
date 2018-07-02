import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readPhoto } from '../actions/photo';

import Content from '../components/Content';

class Photo extends Component {
  
  render() {
    const photoReducer = this.props.photoReducer;

    return (
      <div>
        <Content photoReducer={photoReducer} />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    photoReducer: state.photoReducer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const id = props.match.params.id;

  return {
    actions: dispatch(readPhoto(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);