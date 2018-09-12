import axios from 'axios';
axios.defaults.withCredentials = true;

const endPoint = "http://54.169.251.138";

let eventController = {};

eventController.getEvents = (data) => {
    let response = axios.get(endPoint + '/api/v1/event/list/', {
        params: {
            page_limit: data.pageLimit,
            page_num: data.pageNum
        }
    })
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            return {
                status: 'failed',
                desc: error
            }
        });
    return response;
}

eventController.getEvent = (data) => {
    axios.get(endPoint + '/api/v1/event/', {
        params: {
            event_title: data.event_title
        }
    })
        .then(function (response) {
            // handle success
            return response.data
        })
        .catch(function (error) {
            // handle error
            return {error: error}
        })
}

eventController.createEvent = (data) => {
    console.log(data);
    let response = axios.post(endPoint + '/api/v1/event/create_event/', {
        "event_title": data.event_title,
        "event_desc": data.event_desc,
        "max_quota": parseInt(data.max_quota),
        "event_type": data.event_type,
        "event_start_date": data.event_start_date,
        "event_end_date": data.event_end_date,
        "is_open_ended": data.is_open_ended
    }, {headers: { 'Content-Type': 'application/json' }})
        .then(function (response) {
            // handle success
            return response.data
        })
        .catch(function (error) {
            // handle error
            return {
                status: 'failed',
                desc: error
            }
        })
    return response;
}

eventController.participateEvent = (data) => {
    axios.post(endPoint + '/api/v1/event/participate/', data)
        .then(function (response) {
            // handle success
            return response.data
        })
        .catch(function (error) {
            // handle error
            return {error: error}
        })
}

export default eventController;