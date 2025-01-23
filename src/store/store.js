import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import for thunk
import eventsReducer from '../reducers/eventsReducer';

const store = createStore(eventsReducer, applyMiddleware(thunk));

export default store;
