import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Header, Divider, Icon } from 'semantic-ui-react';

export default class Albums extends Component {

  render() {
    const { albums } = this.props;

    return(      
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='images' circular />
          <Header.Content>Albums</Header.Content>
        </Header>
        <Divider inverted />
        <Card.Group itemsPerRow={4}>
          {albums.map((item)=> (
            <Card color='green' raised key={item.id} image={process.env.PUBLIC_URL + '/image.png'} description={item.title} extra={(<div><Link to={`/albums/${item.id}`}><Icon name='picture' circular /> {item.photos.length} Photos</Link></div>)} />
          ))}
        </Card.Group>
      </div>
    )
  }
}