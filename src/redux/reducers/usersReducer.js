import {REQUEST_USERS_SUCCESS, REQUEST_USERS_FAILED, REQUEST_USERS_START} from "../actions";


const initialState = {
    users: [],
    isEnded: false,
    isFailed: false,
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_USERS_START:
            return {...state, isLoading: true, isFailed: false};

        case REQUEST_USERS_SUCCESS:
            return {...state, isLoading: false, isFailed: false, users: action.payload};

        case REQUEST_USERS_FAILED:
            return {...state, isLoading: false, isFailed: true, users: []};

        default:
            return state;
    }
}
