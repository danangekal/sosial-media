import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Segment, Card, Message, Dimmer, Loader, Button, Image, Header, Icon, Divider } from 'semantic-ui-react';

export default class Content extends Component {

  render() {
    const { friends, isError, isLoading } = this.props.friendReducer;

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
                <Icon name='users' circular />
                <Header.Content>Friends</Header.Content>
              </Header>
              <Divider inverted />
              <Card.Group itemsPerRow={5} >
                {friends.map((item)=> (
                  <Card color='green' key={item.id} link>
                    <Card.Content>
                      <NavLink to={'/profile/'+item.id}>  
                        <Image floated='right' size='mini' src='/matthew.png' />
                      </NavLink>
                      <Card.Header><NavLink to={'/profile/'+item.id}>{item.username}</NavLink></Card.Header>
                      <Card.Meta>{item.name}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        <Button basic color='green' href={'/profile/'+item.id}>
                          Detail Profile
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}