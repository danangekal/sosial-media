import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Card, Image } from 'semantic-ui-react';

export default class Photos extends Component {

  render() {
    const { photos } = this.props;

    return(
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <Card.Group itemsPerRow={2}>
            {photos.map((item)=> (
              <Card raised key={item.id} 
                image={(
                  <Image
                    src={item.thumbnailUrl}
                    as={Link}
                    to={`/photos/${item.id}`}
                  />
                )}
              />
            ))}
          </Card.Group>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Card.Group itemsPerRow={6}>
            {photos.map((item)=> (
              <Card raised key={item.id} 
                image={(
                  <Image
                    src={item.thumbnailUrl}
                    as={Link}
                    to={`/photos/${item.id}`}
                  />
                )}
              />
            ))}
          </Card.Group>
        </Responsive>
      </div>  
    )
  }
}