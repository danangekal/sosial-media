import React, { Component } from 'react';
import { Card, Image, List, Button } from 'semantic-ui-react';

export default class Post extends Component {

  render() {
    const { posts } = this.props;

    return(      
      <div>
        {posts.map((item)=> (
          <Card.Group key={item.id}>
            <Card fluid color='green'>
              <Card.Content>
                <List relaxed='very'>
                  <List.Item>
                    <List.Content floated='right'>
                      <Button href={'/posts/'+item.id} color='green'>View</Button>
                      <Button color='red'>Delete</Button>
                    </List.Content>
                    <Image avatar src='/matthew.png' />
                    <List.Content>
                      <List.Header as='a' href={'/profile/'+item.id}>{item.name}</List.Header>
                      <List.Description>{item.email}</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Card.Content>
              <Card.Content extra>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>{item.comments.length} comments</Card.Meta>
                <Card.Description>{item.body}</Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        ))}
      </div>
    )
  }
}