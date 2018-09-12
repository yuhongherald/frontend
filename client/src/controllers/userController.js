import axios from 'axios';
axios.defaults.withCredentials = true;

let endPoint = "http://54.169.251.138";

let userController = {};

userController.register = (data) => {

};

userController.logIn = (data) => {
    let response = axios.post(endPoint + '/api/v1/user/login/', {
        username: data.username,
        password: data.password
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
}

userController.confirmAccount = (data) => {

}

export default userController;