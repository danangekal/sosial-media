import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';

import { filterExplores } from '../actions/explore';

import Album from '../components/Album';

class Explore extends Component {

  componentWillMount() {
    const login = localStorage.getItem('login');
    const id = login? login.id:1;
    const params = `?id_ne${id}&_expand=user`;

    this.props.filterExplores(params);
  }
  
  render() {
    const { explores, isError, isLoading } = this.props.exploreReducer;

    return (
      <Container>
        <Segment>
        {isError? (
            <Message negative>
              <Message.Header>Oops.. Something Wrong!</Message.Header>
              <p>Please Try Again Reload Page</p>
            </Message>
          ): isLoading? (
            <Segment>
              <Dimmer active inverted>
                <Loader inverted content='Loading' />
              </Dimmer>

              <Image src={process.env.PUBLIC_URL + '/paragraph.png'} />
            </Segment>
          ):(
            <div>
              <Header as='h2' icon textAlign='center'>
                <Icon name='images' circular />
                <Header.Content>Explore</Header.Content>
              </Header>
              <Divider inverted />
              <Album explores={explores} />
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    exploreReducer: state.exploreReducer
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterExplores }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Explore);