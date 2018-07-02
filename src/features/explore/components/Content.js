import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Segment, Card, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';

export default class Content extends Component {

  render() {
    const { explores, isError, isLoading } = this.props.exploreReducer;

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

              <Image src='/paragraph.png' />
            </Segment>
          ):(
            <div>
              <Header as='h2' icon textAlign='center'>
                <Icon name='images' circular />
                <Header.Content>Explore</Header.Content>
              </Header>
              <Divider inverted />
              <Card.Group itemsPerRow={3}>
                {explores.map((item)=> (
                  <Card color='green' key={item.id} image='/image.png' header={item.title} 
                    description={(
                      <NavLink to={'/profile/'+item.userId}>
                        created by: {item.user.name}
                      </NavLink>
                    )} 
                    extra={(
                      <div>
                        <NavLink to={'/albums/'+item.id}>
                          <Icon name='picture' circular /> {explores.length} Photos
                        </NavLink>
                      </div>
                    )} 
                  />
                ))}
              </Card.Group>
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}