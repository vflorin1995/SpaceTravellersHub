import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Rockets from './Rockets/rockets';

const rootReducer = combineReducers({
  Rockets,
});

const store = configureStore({ reducer: rootReducer });

export default store;
