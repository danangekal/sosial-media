import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Feed } from 'semantic-ui-react';

export default class Friends extends Component {

  render() {
    const { friends } = this.props;

    return(      
      <div>
        <Card>
          <Card.Content>
            <Card.Header>Friends</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
            {friends.map((item)=> (
              <Feed.Event key={item.id}>
                <Feed.Label image='/matthew.png' />
                <Feed.Content>
                  <Feed.Summary>
                    <NavLink to={'/profile/'+item.id}>{item.name}</NavLink>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
            </Feed>
          </Card.Content>
        </Card>
      </div>
    )
  }
}