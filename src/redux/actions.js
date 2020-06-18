export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const REQUEST_USERS_START = 'REQUEST_USERS_START';
export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';
export const REQUEST_USERS_FAILED = 'REQUEST_USERS_FAILED';


export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const getUsers = () => {
    return {
        type: REQUEST_USERS_START,
    }
}

export const getUsersSuccess = (users) => {
    return {
        type: REQUEST_USERS_SUCCESS,
        payload: users
    }
}

export const getUsersFailed = () => {
    return {
        type: REQUEST_USERS_FAILED,
    }
}

