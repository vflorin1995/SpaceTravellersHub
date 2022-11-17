import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';
import Rockets from './Rockets/rockets';

const rootReducer = combineReducers({
  Rockets,
  missions: missionsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
