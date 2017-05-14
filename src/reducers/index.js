import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {authStateReducer} from "redux-auth";
import Immutable from "immutable";

const auth = (state = {}, action) => { //otherwise this reducer doesn't work with redux-immutable
    return authStateReducer(Immutable.fromJS(state), action);
};

const rootReducer = combineReducers({
    auth,
    routing
});

export default rootReducer