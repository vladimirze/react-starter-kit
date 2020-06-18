import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {decrement, increment} from "../redux/actions";


export const Counter = () => {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div>{counter}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </React.Fragment>
    )
}
