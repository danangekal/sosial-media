import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../features/login/reducers/login';
import homeReducer from '../features/home/reducers/home';
import postReducer from '../features/post/reducers/post';
import exploreReducer from '../features/explore/reducers/explore';
import albumReducer from '../features/album/reducers/album';
import photoReducer from '../features/photo/reducers/photo';
import friendReducer from '../features/friend/reducers/friend';
import profileReducer from '../features/profile/reducers/profile';

const rootReducer = combineReducers({
  form: formReducer,
  loginReducer,
  homeReducer,
  postReducer,
  exploreReducer,
  albumReducer,
  photoReducer,
  friendReducer,
  profileReducer
});

export default rootReducer;