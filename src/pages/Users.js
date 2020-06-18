import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {asyncGetUsers} from "../redux/thunk";


export const Users = (props) => {
    const {users, isLoading, isFailed} = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetUsers());
    }, []);

    return (
        <React.Fragment>
            <h3>Users</h3>

            <pre>
                {JSON.stringify(users, null, 8)}
            </pre>

            {
                isLoading &&
                <div>loading...</div>
            }

            {
                isFailed &&
                <div>failed...</div>
            }
        </React.Fragment>
    )
}
