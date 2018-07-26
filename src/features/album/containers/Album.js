import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Segment, Message, Dimmer, Loader, Image, Header, Icon, Divider } from 'semantic-ui-react';

import { readAlbum } from '../actions/album';

import Photos from '../components/Photos';

class Album extends Component {
  
  componentWillMount() {
    const id = this.props.match.params.id;
    const params = `/${id}?_embed=photos`;

    this.props.readAlbum(params);
  }

  render() {
    const { album, isError, isLoading } = this.props.albumReducer;

    return (
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

              <Image src={process.env.PUBLIC_URL + '/media-paragraph.png'} />
            </Segment>
          ):(
            <div>
              <Header as='h2' icon textAlign='center'>
                <Icon name='images' circular />
                <Header.Content>{album.title}</Header.Content>
              </Header>
              <Divider inverted />
              <Photos photos={album.photos} />
            </div>
          )}
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    albumReducer: state.albumReducer
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ readAlbum }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Album);