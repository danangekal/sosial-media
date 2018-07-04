import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
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
    const url_profile = `/profile/${id}`;

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
          as={Link}
          to='home'
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        >
          Home
          {/* <NavLink to='/home'>Home</NavLink> */}
        </Menu.Item>
        <Menu.Item
          name='albums'
          as={Link}
          to='explore'
          // active={activeItem === 'albums'}
          // onClick={this.handleItemClick}
        >
          {/* <NavLink to='/explore'>Explore</NavLink> */}
        </Menu.Item>
        <Menu.Item
          name='friends'
          as={Link}
          to='friends'
          // active={activeItem === 'friends'}
          // onClick={this.handleItemClick}
        >
          Friends
          {/* <NavLink to='/friends'>Friends</NavLink> */}
        </Menu.Item>
        <Menu.Item>
        {/* <Menu.Item as={Link} to={url_profile}> */}
          <NavLink to={url_profile}>
            <Icon name='user' /> {username}
          </NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}