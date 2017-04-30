/**
 * Created by jyothi on 30/4/17.
 */
export const TODO = {
    _id: null, // string
    userId: null, //string
    title: "", //string
    description: "", //string
    timestamp: null, //date ISOString
    startTime: 0, //seconds
    endTime: 0, //seconds
    status: false, //boolean true: done, false: undone
    label: "Default", //ENUM for user itself
    priority: null, //PRIORITY ENUM -1, 0, +1
    notify: false, //boolean
};

export const USER = {
    _id: null, //string
    name: "", //String
    username: "", //string for url
    email: "", //string
    mobile: "", //string
    location: "", //string
    verified: false, //boolean verified profile
    timezone: null, //don't know what is this
    gender: 0, //GENDER ENUM -1, 0, +1
    dob: null, //Date
    public: false, // boolean is profile public
    daily: [], //daily todos
    weekly: [], // weekly todos
    monthly: [], //monthly todos
};