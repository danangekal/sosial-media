import React, { Component } from 'react';

import { Menu, Icon, Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import Validator from 'validatorjs';
import lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';

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

  render() {
    const { handleSubmit } = this.props;

    return (
      <Menu className='menu-primary-login' top='true' inverted secondary>
        <Menu.Menu position='left'>
          <Menu.Item>
            <Icon name='universal access' size='huge' />
          </Menu.Item>
        </Menu.Menu>
        <Form className='form-login' onSubmit={ handleSubmit } inverted>
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

export default ReduxForm;