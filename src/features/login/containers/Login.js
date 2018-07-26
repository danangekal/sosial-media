import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginUser } from '../actions/login';

import Navbar from '../components/Navbar';

class Login extends Component {
  
  handleSubmit = (value) => {
    this.props.dispatch(loginUser(value.email))
    .then((result) => {
      console.log(result.value.statusText);

      return <Redirect to='/home' />;
    }).catch((error) => {
      if (error.response) {
        alert(error.response.request._response); 
      } else {
        alert(error.message);
      }

      return false;
    })
  }

  render() {

    return (
      <div>
        <Navbar {...this.props} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect()(Login);