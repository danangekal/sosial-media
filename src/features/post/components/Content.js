import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

              <Image src={process.env.PUBLIC_URL + '/media-paragraph.png'} />
            </Segment>
          ):(
            <div>
              <Card.Group>
                <Card fluid color='teal'>
                  <Card.Content>
                    <List relaxed='very'>
                      <List.Item>
                        <Image circular size='mini' as={Link} to={`/profile/${post.user.id}`} src={process.env.PUBLIC_URL + '/matthew.png'} />
                        <List.Content>
                          <List.Header as={Link} to={`/profile/${post.user.id}`}>{post.user.name}</List.Header>
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
                  <Comments comments={post.comments} user={post.user}/>
                </Card>
              </Card.Group>
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}