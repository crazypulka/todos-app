import moment from 'moment';
/**
 * Created by Araja Jyothi Babu on 21-Oct-16.
 */

/**
 * Configurations of dashboard, which can be manipulated here.
 * @type {string}
 */

export const API_ROOT = window.API_ROOT;

export const ApxorAppInfo = window.apxorAppInfo;

export const DateDisplayFormat = window.dateDisplayFormat || 'MMM D, YYYY';

const startDate = window.startDate || moment().subtract(29, 'days');

export const DEFAULT_START_TIME  = startDate;

export const MOBILE_IMAGE = "/assets/img/mobile.png";