import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Menu, Icon} from 'semantic-ui-react';

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ 
      activeItem: name 
    })
  }

  render() {
    // const { activeItem } = this.state;
    const username = (this.props.login)? this.props.login.username:'';
    const id = (this.props.login)? this.props.login.id:'1';
    const url_profile = '/profile/'+id;

    return (
      <Menu className='menu-primary' top='true' inverted secondary>
        <Menu.Menu position='left'>
          <Menu.Item>
            <Icon name='universal access' size='big' />
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Item
          name='home'
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        >
          <NavLink to='/home'>Home</NavLink>
        </Menu.Item>
        <Menu.Item
          name='albums'
          // active={activeItem === 'albums'}
          // onClick={this.handleItemClick}
        >
          <NavLink to='/explore'>Explore</NavLink>
        </Menu.Item>
        <Menu.Item
          name='friends'
          // active={activeItem === 'friends'}
          // onClick={this.handleItemClick}
        >
          <NavLink to='/friends'>Friends</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={url_profile}>
            <Icon name='user' /> {username}
          </NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}