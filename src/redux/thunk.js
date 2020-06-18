import axios from 'axios';

import {getUsers, getUsersFailed, getUsersSuccess} from "./actions";


export function asyncGetUsers() {
    return (dispatch, getState) => {
        dispatch(getUsers());

        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((response) => {
                dispatch(getUsersSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getUsersFailed());
                console.error(error);
            });
    }
}
