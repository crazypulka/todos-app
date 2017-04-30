/**
 * Created by jyothi on 30/4/17.
 */
export const TODO = {
    _id: null, // string
    title: "", //string
    description: "", //string
    timestamp: null, //date ISOString
    startTime: null, //date ISOString
    endTime: null, //date ISOString
    status: false, //boolean true: done, false: undone
    label: "Default", //ENUM for user itself
    priority: null, //PRIORITY ENUM
    notify: false, //boolean
};