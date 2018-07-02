import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { Routes } from './config/Routes';
import { store, persistor, history } from './store/configureStore';
import './App.css';

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Routes/>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
