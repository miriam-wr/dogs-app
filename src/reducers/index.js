import dogsReducer from './dogs';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  dogs: dogsReducer,
});

export default allReducers;
