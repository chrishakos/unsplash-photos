import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import photos from './photo';
import getPhotosButton from './getPhotosButton';
import modal from './modal';

export default combineReducers({
  routing: routerReducer,
  photos,
  getPhotosButton,
  modal
});
