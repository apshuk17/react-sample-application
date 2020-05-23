import axios from 'axios';
import { FETCH_USERS } from './actionTypes';
import { rickMortyDataSuccess, rickMortyDataFail } from './rickMortyActions';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

    dispatch({
        type: FETCH_USERS,
        payload: res,
    });
}

export const fetchRickMortyData = () => async dispatch => {
    try {
        const res = await axios.get('https://rickandmortyapi.com/api/character');
        dispatch(rickMortyDataSuccess(res));
    } catch (err) {
        dispatch(rickMortyDataFail(err));
    }
}