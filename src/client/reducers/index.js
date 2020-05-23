import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import RickMortyReducer from './rickMortyReducer';

export default combineReducers({
    users: usersReducer,
    rickMorty: RickMortyReducer
})