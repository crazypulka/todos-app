import isPromise from '../utils/isPromise';

export default function promiseMiddleware({ dispatch }) {
    return next => action => {
        if (!isPromise(action.payload)) {
            return next(action);
        }

        const { types, payload, meta, callbacks } = action;
        const { promise, data } = payload;
        const [ PENDING, FULFILLED, REJECTED ] = types;

        const {
            pendingWillDispatch, pendingDidDispatch,
            successWillDispatch, successDidDispatch,
            failedWillDispatch, failedDidDispatch
        } = callbacks || {};

        /**
         * Dispatch the pending action
         */
        pendingWillDispatch && pendingWillDispatch(dispatch, data);
        dispatch({
            type: PENDING,
            ...data && { payload: data },
            ...meta && { meta },
        });
        pendingDidDispatch && pendingDidDispatch(dispatch, data);
        
        /**
         * If successful, dispatch the fulfilled action, otherwise dispatch
         * rejected action.
         */
        return promise.then(
            result => {
                successWillDispatch && successWillDispatch(dispatch, result);
                dispatch({
                    type: FULFILLED,
                    payload: result,
                    meta,
                });
                successDidDispatch && successDidDispatch(dispatch, result);
            },
            error => {
                failedWillDispatch && failedWillDispatch(dispatch, error);
                dispatch({
                    type: REJECTED,
                    payload: error,
                    meta,
                });
                failedDidDispatch && failedDidDispatch(dispatch, error);
            }
        );
    };
}