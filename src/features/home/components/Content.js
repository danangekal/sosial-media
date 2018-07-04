import React, { Component } from 'react';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';

import Post from './Post';

export default class Content extends Component {
  
  render() {
    const handleSubmitPost = this.props.handleSubmitPost;
    const { posts, isError, isLoading } = this.props.homeReducer;

    return(
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
              <Post {...this.props} onSubmit={handleSubmitPost} posts={posts} />
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}