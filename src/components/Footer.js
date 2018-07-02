import React, { Component } from 'react';
import { Divider, Segment, Header } from 'semantic-ui-react';

export default class Footer extends Component {
  
  render() {

    return (
      <Segment>
        <Divider inverted />
        <Divider horizontal inverted>
          <Header size='small'>Copyright &copy; 2018</Header>
        </Divider>
      </Segment>
    )
  }
}
