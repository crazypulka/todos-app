/**
 * Created by Araja Jyothi Babu on 20-Oct-16.
 */
import { API_ROOT } from '../config';
import { isDefined } from '../utils';
import $ from 'jquery';
import logger from '../utils/Logger';
import { SERVER_IDENTIFIERS } from '../constants/EndPoints';

export const HEADERS = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

const defaultConfig = {
    headers: HEADERS
};

const makeConfig = (config) => {
    const {host, token} = config.auth || {};
    return {
        headers: {
            ...defaultConfig.headers,
            "X-Apx-Host": host, //|| SERVER_IDENTIFIERS.google, //selects server api
            "X-Auth-Token": token //TODO: make use of this
        },
        body: config.body,
        method: config.method
    };
};

/**
 *
 * @param resolve
 * @param callback
 * @param result
 * @returns {*}
 */
const handleSuccess = (resolve, callback, result) => {
    if(isDefined(callback) && typeof callback === 'function') {
        return resolve(callback(result));
    }else{
        return resolve(result);
    }
};

/**
 *
 * @param reject
 * @param callback
 * @param error
 * @returns {*}
 */
const handleFailure = (reject, callback, error) => {
    if(isDefined(callback) && typeof callback === 'function') {
        return reject(callback({type: "Error", payload: error}));
    }else{
        return reject(null);
    }
};

/**
 * WebAPI to make Asynchronous requests
 * @param url
 * @param config
 * @param onSuccess
 * @param onFailure
 * @returns {Promise}
 */
export const callApi = (url, config, onSuccess, onFailure) => {
    return new Promise((resolve, reject) => {
        const fullUrl = API_ROOT + url;
        const options = makeConfig(config);
        logger.info("Came to make Ajax request with options for URL: ", fullUrl, " are : =>", options);
        $.ajax({
            type: options.method || "GET",
            url: fullUrl,
            data: options.body,
            headers: options.headers,
            dataType: 'json',
            contentType: "application/json; charset=utf-8"
        }).done((response, statusText, xhr) => {
            logger.info(statusText, "Response for URL: " + fullUrl, response);
            handleSuccess(resolve, onSuccess, response);
        }).fail(error => {
            logger.error("Error:::: ", error, "for URL: => " + fullUrl, " with Request Options: => ", options);
            handleFailure(reject, onFailure, error);
        }).always((response, statusText, xhr) => {
            logger.info(statusText, "Response for URL: " + fullUrl, response);
            if(xhr.status > 200 && xhr.status < 300){ //FIXME: handling other status codes
                handleSuccess(resolve, onSuccess, response);
            }
        });
    });
};