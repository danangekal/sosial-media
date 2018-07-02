import React, { Component } from 'react';
import { Container, Segment, Message, Dimmer, Loader, Image, Divider, Grid } from 'semantic-ui-react';

import User from './User';
import Friends from './Friends';
import Albums from './Albums';
import Posts from './Posts';

export default class Content extends Component {

  render() {
    const { profile, albums, posts, friends, isError, isLoading } = this.props.profileReducer;

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
              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <User profile={profile} />
                    <Friends friends={friends} />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Albums albums={albums} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Divider inverted />
              <Posts posts={posts} />
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}