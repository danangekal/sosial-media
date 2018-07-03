import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../features/login/containers/Login';
import Home from '../features/home/containers/Home';
import Post from '../features/post/containers/Post';
import Explore from '../features/explore/containers/Explore';
import Album from '../features/album/containers/Album';
import Photo from '../features/photo/containers/Photo';
import Friend from '../features/friend/containers/Friend';
import Profile from '../features/profile/containers/Profile';

// The Routing Component providing all the routing Configuration
export const Routes = (props) => {
  const login = {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz'};

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar login={login}/>
        <div>
          <Switch>
            <Route exact path='/' render={() => (
              login ? (
                <Redirect to='/home'/>
              ) : (
                <Login/>
              )
            )}/>
            <Route path='/home' component={Home} />
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
    </BrowserRouter>
  )
}
