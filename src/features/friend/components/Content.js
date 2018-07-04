import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

              <Image src={process.env.PUBLIC_URL + '/paragraph.png'} />
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
                      <Image as={Link} to={`/profile/${item.id}`} floated='right' size='mini' src={process.env.PUBLIC_URL + '/matthew.png'} />
                      <Card.Header><Link to={`/profile/${item.id}`}>{item.username}</Link></Card.Header>
                      <Card.Meta>{item.name}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        <Button basic color='green' as={Link} to={`/profile/${item.id}`}>
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