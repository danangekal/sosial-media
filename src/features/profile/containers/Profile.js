import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readProfile, allFriends, allAlbums, allPosts } from '../actions/profile';

import Content from '../components/Content';

class Profile extends Component {
  
  render() {
    const profileReducer = this.props.profileReducer;

    return (
      <div>
        <Content profileReducer={profileReducer} />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    profileReducer: state.profileReducer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const id = props.match.params.id;
  const params1 = `?userId=${id}&_embed=photos`;
  const params2 = `?userId=${id}&=user&_embed=comments&_order=desc`;
  const params3 = `?id_ne=${id}`; //Not id

  return {
    actions: dispatch(readProfile(id)),
    actions2: dispatch(allAlbums(params1)),
    actions3: dispatch(allPosts(params2)),
    actions4: dispatch(allFriends(params3))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);