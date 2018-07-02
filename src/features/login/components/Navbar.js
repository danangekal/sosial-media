import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Menu, Icon, Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import Validator from 'validatorjs';
import lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';

import * as LoginActions from '../actions/login';

import inputField from '../../../components/inputField';

lang._set('en', en);

const validate = values => {
  const rules = {
      email: 'required|email',
      password: 'required|min:6'
  };

  const validator = new Validator(values, rules);
  if(validator.fails()){
      return validator.errors.all();
  }
}

class Navbar extends Component {

  handleSubmitLogin = (value) => {
    // console.table(value);
    // this.props.actions.loginUser(value)
    // .then((result) => {
    //   // return <Redirect to='/home' />;
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
    // const { handleSubmitLogin } = this.props;

    return (
      <Menu className='menu-primary-login' top='true' inverted secondary>
        <Menu.Menu position='left'>
          <Menu.Item>
            <Icon name='universal access' size='huge' />
          </Menu.Item>
          <Menu.Item 
            name='home' 
            href='/home'
          />
        </Menu.Menu>
        <Form className='form-login' onSubmit={this.handleSubmitLogin} inverted>
          <Form.Group widths='equal'>
            <Field
              name='email'
              label='Email'
              type='email'
              placeholder='Email'
              component={inputField}
            />
            <Field
              name='password'
              label='Password'
              type='password'
              placeholder='Password'
              component={inputField}
            />
            
            <Form.Button className='button-login' type='submit' content='Login' positive />
          </Form.Group>
        </Form>
      </Menu>
    )
  }
}

const ReduxForm = reduxForm({
  form: 'navbar',
  validate,
  initialValues: {
    email: 'Sincere@april.biz',
    password: '123456'
  }
})(Navbar)

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(mapDispatchToProps)(ReduxForm);