import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';

import { createPost, filterPosts } from '../actions/home';

import Post from '../components/Post';

class Home extends Component {

  componentWillMount() {
    const params = `?_expand=user&_embed=comments&_order=desc`;

    this.props.filterPosts(params);
  }
  
  handleSubmit = (value) => {
    this.props.dispatch(createPost(value))
    .then((result) => {
      const params = `?_expand=user&_embed=comments&_order=desc`;
      alert(result.value.statusText);
      this.props.dispatch(filterPosts(params));
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
    const { posts, isError, isLoading } = this.props.homeReducer;
    const { user } = this.props.loginReducer;
    
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
                <Icon name='newspaper outline' circular />
                <Header.Content>News</Header.Content>
              </Header>
              <Divider inverted />
              <Post onSubmit={this.handleSubmit} posts={posts} userId={user.id} />
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    homeReducer: state.homeReducer,
    loginReducer: state.loginReducer
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createPost, filterPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);