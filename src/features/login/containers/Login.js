import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loginUser } from '../actions/login';

// import Navbar from '../components/Navbar';
import Content from '../components/Content';
// import Footer from '../../../components/Footer';

class Login extends Component {
  
  handleSubmitLogin = (value) => {
    alert('tes');
    // this.props.actions.loginUser(value)
    // .then((result) => {
    //   return <Redirect to='/home' />;
    // }).catch((error) => {
    //   if (error.response) {
    //     alert(error.response.request._response); 
    //   } else {
    //     alert(error.message);
    //   }

    //   return false;
    // })
  }

  render() {

    return (
      <div>
        {/* <Navbar {...this.props} onSubmit={this.handleSubmitLogin} /> */}
        <Content />
        {/* <Footer/> */}
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    loginReducer: state.loginReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(loginUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);