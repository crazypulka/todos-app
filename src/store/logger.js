/**
 * Created by Araja Jyothi Babu on 20-Oct-16.
 */
import createLogger from 'redux-logger';
import immutableToJS from '../utils/immutableToJS';

export default createLogger({
    collapsed: true,
    logger: console,
    stateTransformer: (state) => {
        return immutableToJS(state);
    },
    predicate: (getState, { type }) => {
        return type !== 'redux-form/BLUR' &&
            type !== 'redux-form/CHANGE' &&
            type !== 'redux-form/FOCUS' &&
            type !== 'redux-form/TOUCH';
    },
});