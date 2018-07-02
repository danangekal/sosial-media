import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readAlbum } from '../actions/album';

import Content from '../components/Content';

class Album extends Component {
  
  render() {
    const albumReducer = this.props.albumReducer;

    return (
      <div>
        <Content albumReducer={albumReducer} />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    albumReducer: state.albumReducer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const id = props.match.params.id;
  const params = `/${id}?_embed=photos`;

  return {
    actions: dispatch(readAlbum(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);