import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import NavbarLogin from '../features/login/containers/Login';
import Footer from '../components/Footer';
import Signup from '../features/login/containers/Signup';
import Home from '../features/home/containers/Home';
import Post from '../features/post/containers/Post';
import Explore from '../features/explore/containers/Explore';
import Album from '../features/album/containers/Album';
import Photo from '../features/photo/containers/Photo';
import Friend from '../features/friend/containers/Friend';
import Profile from '../features/profile/containers/Profile';

// The Routing Component providing all the routing Configuration
const Routes = (props) => {
  const user = {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz'};
  // const { user } = props.loginReducer;
  const { id } = user;

  return (
    <Router>
      <div>
        {id? (
          <Navbar user={user}/>
        ): (
          <NavbarLogin/>
        )}
        <div>
          <Switch>
            <Route exact path='/' render={() => (
              id? (
                <Redirect to='/home'/>
              ) : (
                <Signup/>
              )
            )}/>
            <Route path='/home' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/posts/:id' component={Post} />
            <Route path='/explore' component={Explore} />
            <Route path='/albums/:id' component={Album} />
            <Route path='/photos/:id' component={Photo} />
            <Route path='/friends' component={Friend} />
            <Route path='/profile/:id' component={Profile} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

const mapStateToProps = (state)=> {
  return {
    loginReducer: state.loginReducer
  }
}

export default connect(mapStateToProps)(Routes);