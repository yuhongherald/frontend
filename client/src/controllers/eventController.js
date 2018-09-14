import axios from 'axios';

axios.defaults.withCredentials = true;

const endPoint = "http://54.169.251.138";

let eventController = {};

eventController.getEvents = (data) => {
    console.log(data);
    let response = axios.get(endPoint + '/api/v1/event/list/', {
        params: data
    })
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            return {
                status: 'failed',
                desc: error.message
            }
        });
    return response;
};

eventController.getEvent = (data) => {
    let response = axios.get(endPoint + '/api/v1/event/get_event/', {
        params: data
    })
        .then(function (response) {
            // handle success
            return response.data
        })
        .catch(function (error) {
            // handle error
            return {
                status: 'failed',
                desc: error.message
            }
        })
    return response;
};

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
    }, {headers: {'Content-Type': 'application/json'}})
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
        });
    return response;
}

eventController.participateEvent = (data) => {
    let response = axios.post(endPoint + '/api/v1/event/participate/', {
        eid: data.eid,
        op_type: data.op_type
    })
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
};

export default eventController;