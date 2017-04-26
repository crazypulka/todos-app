/**
 * Created by Araja Jyothi Babu on 22-Oct-16.
 */
import moment from 'moment';
import $ from 'jquery';

/**
 * checks whether a value is defined
 * @param value {*}
 * @param strict {Boolean}
 * @returns {Boolean}
 */
export function isDefined(value, strict = true){
    if(!strict && value == 0) return true; //FIXME: handling 0 values
    return value && value !== null && typeof value !== 'undefined';
}

/**
 * assigns new values if existing value is null or undefined
 * @param defaultValue
 * @param newValue
 * @returns {*}
 */
export function assignValue(defaultValue, newValue) {
    return isDefined(newValue) ? newValue : defaultValue;
}

/**
 * replaces unwanted chars from string
 * @param text
 * @param originalChar
 * @param newChar
 * @param defaultValue
 * @returns {*}
 */
export function removeCharsWith(text, originalChar, newChar, defaultValue = "") {
    if(!isDefined(text)) return defaultValue;
    return text.split(originalChar).join(newChar);
}

/**
 * Gives random color as HEX String
 * @returns {string}
 */
export function getRandomColor() {
    let letters = 'ABC789';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
    //return '#'+(Math.random()*0xFFFFFF<<0).toString(16); generates any color
}

/**
 * return time from now
 * @param time
 * @returns {*}
 */
export function displayTimeFromNow(time) { //TODO: use this function to all
    if(!time || time === "NA") return "NA";
    return moment(time).fromNow();
}

/**
 *
 * @param n
 * @returns {boolean}
 */
export function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

/**
 * rounds large float values to given digits
 * @param number
 * @param toDigits
 * @returns {*}
 */
export const roundOffNumber = (number, toDigits = 2) => {
    return !isNaN(number) && isFloat(number) ? number.toFixed(toDigits) : number;
};

/**
 * Capitalize
 * @param str
 */
export function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

/**
 *
 * @param timestamp
 * @param defaultValue
 * @return as format of hh:mm AM
 */
export function formatToTime(timestamp, defaultValue = "NA") {
    if(!isDefined(timestamp)) return defaultValue;
    return moment(timestamp).format('LT');
}

/**
 *
 * @param timestamp
 * @param formats
 * @param defaultValue
 * @returns {string}
 */
export function calendarTime(timestamp, formats = { sameElse: 'DD/MM/YYYY' }, defaultValue = "NA"){
    if(!isDefined(timestamp)) return defaultValue;
    return moment(timestamp).calendar(null, formats);
}

/**
 *
 * @param timestamp
 * @param format
 * @param defaultValue
 * @returns {*}
 */
export function formatTime(timestamp, format = "MMM Do YYYY, h:mm:ss a", defaultValue = "NA"){
    if(!isDefined(timestamp)) return defaultValue;
    return moment(timestamp).format(format);
}

/**
 *
 * @param {Array} list
 * @param {string} defaultValue
 * @returns {string}
 */
export function getHighestFromList(list, defaultValue = "NA"){
    if(!list || !Array.isArray(list)) return defaultValue;
    return list.sort().reverse()[0];
}

/**
 *
 * @param variable
 * @returns {boolean}
 */
function isString(variable){
    return isDefined(variable) && typeof variable === 'string';
}

/**
 *
 * @param variable
 * @returns {boolean}
 */
function isArray(variable) {
    return isDefined(variable) && Array.isArray(variable);
}

/**
 * 
 * @param variable
 * @returns {*|boolean|boolean}
 */
function isNumber(variable) {
    return isDefined(variable, false) && !isNaN(variable);
}