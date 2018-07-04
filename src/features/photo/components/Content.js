import React, { Component } from 'react';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Divider } from 'semantic-ui-react';

export default class Content extends Component {

  render() {
    const { photo, isError, isLoading } = this.props.photoReducer;

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
              <Header as='h2' icon textAlign='center'>
                <Header.Content>{photo.title}</Header.Content>
              </Header>
              <Divider inverted />
              <Image src={photo.url} size='big' centered />
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}