import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Icon} from 'semantic-ui-react';

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ 
      activeItem: name 
    })
  }

  render() {
    const { activeItem } = this.state;
    const { id, username } = this.props.user;
    const url_profile = `/profile/${id}`;

    return (
      <Menu className='menu-primary' top='true' inverted secondary>
        <Menu.Menu position='left'>
          <Menu.Item>
            <Icon name='universal access' size='big' />
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Item name='home' as={Link} to='/home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item name='explore' as={Link} to='/explore'
          active={activeItem === 'explore'}
          onClick={this.handleItemClick}
        >
          Explore
        </Menu.Item>
        <Menu.Item name='friends' as={Link} to='/friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        >
          Friends
        </Menu.Item>
        <Menu.Item name='profile' as={Link} to={url_profile}
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          <Icon name='user' /> {username}
        </Menu.Item>
      </Menu>
    )
  }
}