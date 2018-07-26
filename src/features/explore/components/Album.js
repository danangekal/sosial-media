import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Card, Image, Label, Icon } from 'semantic-ui-react';

export default class Album extends Component {

  render() {
    const { explores } = this.props;

    return(
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <Card.Group itemsPerRow={1}>
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
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
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
        </Responsive>
      </div>
    )
  }
}