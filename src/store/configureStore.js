import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promiseMiddleware';
import logger from './logger';
import rootReducer from '../reducers';

const __DEV__ = !(process.env.NODE_ENV === "production");

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const authStorageConfig = {
    key: 'auth',
    serialize: (store) => {
        return store && store.auth ?
            JSON.stringify(store.auth) : store;
    },
    deserialize: (state) => ({
        auth: state ? JSON.parse(state) : {},
    }),
};

function configureStore(initialState) {
    let appId = "default";
    try{
        appId = rootReducer.app.basic_info.app_id;
    }catch(e){}
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            __DEV__
                ? applyMiddleware(reduxRouterMiddleware, promiseMiddleware, thunk, logger)
                : applyMiddleware(reduxRouterMiddleware, promiseMiddleware, thunk),
            //DevTools.instrument(),
            persistState('auth', authStorageConfig)
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    // Required for replaying actions from devtools to work
    if (__DEV__) {
        //reduxRouterMiddleware.listenForReplays(store);
    }

    return store;
}


export default configureStore;