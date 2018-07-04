import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Header, Form, Button, Comment } from 'semantic-ui-react';

export default class Comments extends Component {

  render() {
    const { comments, user } = this.props;

    return(
      <Card.Content extra>
        <Comment.Group minimal>
          <Header as='h3' dividing>
            Comments
          </Header>
          {comments.map((item)=> (
              <Comment key={item.id}>
                <Comment.Avatar as={Link} to={`/profile/${user.id}`} src={process.env.PUBLIC_URL + '/matthew.png'} />
                <Comment.Content>
                  <Comment.Author>{item.name}</Comment.Author>
                  <Comment.Metadata>
                    <span>{user.name} ({item.email})</span>
                  </Comment.Metadata>
                  <Comment.Text>{item.body}</Comment.Text>
                </Comment.Content>
              </Comment>
          ))}
          <Form reply>
            <Form.TextArea />
            <Button content='Add Comment' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>
        </Card.Content>
    )
  }
}