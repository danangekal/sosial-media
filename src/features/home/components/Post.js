import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, List, Button, Form } from 'semantic-ui-react';

export default class Post extends Component {

  render() {
    const { handleSubmitPost, posts } = this.props;

    return(      
      <div>
        <Card.Group>
          <Card fluid color='green'>
            <Card.Content>
              <Form onSubmit={handleSubmitPost} reply>
                <Form.Input />
                <Form.TextArea />
                <Button content='Send Post' type='submit' labelPosition='left' icon='edit' primary />
              </Form>
            </Card.Content>
          </Card>
        </Card.Group>
        {posts.map((item)=> (
          <Card.Group key={item.id}>
            <Card fluid color='teal'>
              <Card.Content>
                <List relaxed='very'>
                  <List.Item>
                    <List.Content floated='right'>
                      <Button as={Link} to={`/posts/${item.id}`} color='green'>View</Button>
                    </List.Content>
                    <Image circular size='mini' as={Link} to={`/posts/${item.id}`} src='/matthew.png' />
                    <List.Content>
                      <List.Header as={Link} to={`/profile/${item.user.id}`}>{item.user.name}</List.Header>
                      <List.Description>{item.user.email}</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Card.Content>
              <Card.Content extra>
                <Card.Header as={Link} to={`/posts/${item.id}`}>{item.title}</Card.Header>
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

// const ReduxForm = reduxForm({
//   form: 'post',
//   // validate,s
//   initialValues: {
//     title: 'tes',
//     body: ''
//   }
// })(Post)

// export default ReduxForm;