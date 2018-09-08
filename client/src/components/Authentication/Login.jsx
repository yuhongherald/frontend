import React from 'react';
import './css/Login.css';
import TextField from '@material-ui/core/TextField';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Auth from '../../modules/Auth';
import {browserHistory} from 'react-router';
import axios from "axios";

require('dotenv').config();
import {Validator} from 'jsonschema';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                'username': '',
                'password': ''
            },
            'isSignIn': false
        };
        this.getAuth = this.getAuth.bind(this);
        this.onChange = this.onChange.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }


    getAuth() {
        // axios({
        //     method: 'post',
        //     url: 'localhost:5000/v1/user/login',
        //     data: this.state.user
        // }).then(function (response) {
        //     // handle success
        //     Auth.authenticateUser("1", this.state.user);
        // }).catch(function (error) {
        //     // handle error
        //     console.log(error);
        // });
        console.log(this.state.user);
        Auth.authenticateUser("1", this.state.user);

    }

    onChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user: user
        });
    }

    responseFacebook(response) {
        console.log(response);
        this.setState({
            'isSignIn': true
        });

        let authData = {
            'username': response.name,
            'token': response.accessToken
        };

        // // Validate the data before sending to backend
        // let v = new Validator();
        // let userSchema = {
        //     "username": {"type": "string"},
        //     "password": {"type": "string"}
        // };
        // let isValid = v.validate(authData, userSchema);
        // if (isValid) {
        //     console.log('Valid request');
        Auth.authenticateUser("1", authData);
        browserHistory.push('/');
        // }
        // else {
        //     console.log('invalid request')
        // }


        //TODO send data to backend

    }

    responseGoogle(response) {

        this.setState({
            'isSignIn': true
        })
    }

    componentDidMount() {
    }

    componentWillMount() {

    }

    componentDidUpdate() {

    }

    render() {
        const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
        const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
        return (
            <div className="login-box">
                <div className="lb-header">
                    <a href="#" className="active" id="login-box-link">Login</a>
                    <a href="#" id="signup-box-link">Sign Up</a>
                </div>
                <div className="social-login">
                    <FacebookLogin
                        appId={FACEBOOK_APP_ID}
                        autoLoad={true}
                        fields="name,email,picture"
                        // onClick={componentClicked}
                        callback={this.responseFacebook}
                    />

                    <GoogleLogin
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />
                </div>

                <form className="email-login">
                    <div className="field-line">
                        <TextField className="u-form-group"
                                   name="username"
                                   value={this.state.user.username}
                                   onChange={this.onChange}
                        />
                    </div>

                    <div className="field-line">
                        <TextField className="u-form-group"
                                   type="password"
                                   name="password"
                                   value={this.state.user.password}
                                   onChange={this.onChange}
                        />
                    </div>

                    <div className="u-form-group">
                        <button type="button" onClick={this.getAuth}>Sign Up</button>
                    </div>

                    <div className="u-form-group">
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>

                </form>

            </div>
        )
    }
}

export default Login;


