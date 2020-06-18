import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {counterReducer} from "./reducers/counterReducer";
import {logger} from "../middleware/logger";
import {usersReducer} from "./reducers/usersReducer";


const middleware = [logger, thunk];

const rootReducer = combineReducers({
    counterReducer,
    usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
