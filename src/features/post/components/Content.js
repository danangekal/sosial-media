import React, { Component } from 'react';
import { Container, Segment, Message, Dimmer, Loader, Image, Card, List } from 'semantic-ui-react';

import Comments from './Comments';

export default class Content extends Component {

  render() {
    const { post, isError, isLoading } = this.props.postReducer;

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

              <Image src='/media-paragraph.png' />
            </Segment>
          ):(
            <div>
              <Card.Group>
                <Card fluid color='teal'>
                  <Card.Content>
                    <List relaxed='very'>
                      <List.Item>
                        <Image avatar src='/matthew.png' />
                        <List.Content>
                          <List.Header as='a' href={'/profile/'+post.user.id}>{post.user.name}</List.Header>
                          <List.Description>{post.user.email}</List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Card.Content>
                  <Card.Content extra>
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Meta>{post.comments.length} comments</Card.Meta>
                    <Card.Description>{post.body}</Card.Description>
                  </Card.Content>
                  <Comments comments={post.comments} />
                </Card>
              </Card.Group>
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}