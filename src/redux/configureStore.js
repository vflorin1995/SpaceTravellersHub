import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Rockets from './Rockets/rockets';
import Mission from '../modules/mission';

const rootReducer = combineReducers({
  Rockets,
  Mission,
});

const store = configureStore({ reducer: rootReducer });

export default store;
