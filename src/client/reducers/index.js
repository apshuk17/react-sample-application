import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import RickMortyReducer from './rickMortyReducer';
import FilterReducer from './filterReducer';

export default combineReducers({
    users: usersReducer,
    rickMorty: RickMortyReducer,
    filterTerms: FilterReducer,
})