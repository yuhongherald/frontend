import axios from 'axios';

const endPoint = "http://54.169.251.138";

let eventController = {};

eventController.getEvents = (data) => {
    console.log(data);
    axios.get(endPoint + '/api/v1/event/list/', {
        params: {
            page_limit: data.pageLimit,
            page_num: data.pageNum
        }
    })
        .then(function (response) {
            // handle success
            return response
        })
        .catch(function (error) {
            // handle error
            return {
                status: 'failed',
                desc: error
            }
        })
}

eventController.getEvent = (data) => {
    axios.get(endPoint + '/api/v1/event/', {
        params: {
            event_title: data.event_title
        }
    })
        .then(function (response) {
            // handle success
            return response
        })
        .catch(function (error) {
            // handle error
            return {error: error}
        })
}

eventController.createEvent = (data) => {
    axios({
        method: 'post',
        url: endPoint + '/api/v1/create_event/',
        data: data
    })
        .then(function (response) {
            // handle success
            return response
        })
        .catch(function (error) {
            // handle error
            return {
                status: 'failed',
                desc: error
            }
        })
}

eventController.participateEvent = (data) => {
    axios({
        method: 'post',
        url: endPoint + '/api/v1/event/participate/',
        data: data
    })
        .then(function (response) {
            // handle success
            return response
        })
        .catch(function (error) {
            // handle error
            return {error: error}
        })
}

export default eventController;