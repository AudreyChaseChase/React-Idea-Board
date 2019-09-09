import { combineReducers } from 'redux';
import ideas from './idea';
import notification from './notification';

export default combineReducers({
 ideas,
 notification,
});