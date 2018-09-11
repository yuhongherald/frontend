import axios from 'axios';

let userController = {};
let endPoint = "http://54.169.251.138";

userController.register = (data) => {

};

userController.logIn = (data) => {
    axios({
        method: 'post',
        url: endPoint + '/api/v1/user/login/',
        data: data,
        headers: {
            'Access-Control-Allow-Origin': '*',
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

userController.confirmAccount = (data) => {

}

export default userController;