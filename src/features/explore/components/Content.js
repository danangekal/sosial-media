import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Card, Message, Dimmer, Loader, Image, Header, Icon, Divider, Label } from 'semantic-ui-react';

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

              <Image src={process.env.PUBLIC_URL + '/paragraph.png'} />
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
                  <Card color='green' key={item.id} image={process.env.PUBLIC_URL + '/image.png'} 
                    header={item.title} 
                    description={(
                      <Label as={Link} to={`/profile/${item.userId}`} color='teal' image>
                        <Image src={process.env.PUBLIC_URL + '/matthew.png'} />
                        {item.user.name}
                      </Label>
                    )} 
                    extra={(
                      <div>
                        <Link to={`/albums/${item.id}`}>
                          <Icon name='picture' circular /> {explores.length} Photos
                        </Link>
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