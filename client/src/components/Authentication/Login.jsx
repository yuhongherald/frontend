import React from 'react';
import './css/Login.css';
import TextField from '@material-ui/core/TextField';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Auth from '../../modules/Auth';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import userController from '../../controllers/userController.js';
import {hashHistory} from 'react-router';

require('dotenv').config();

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                'username': '',
                'password': ''
            },
            isSignIn: false,
            error: false
        };
        this.getAuth = this.getAuth.bind(this);
        this.onChange = this.onChange.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }


    getAuth() {
        let postData = this.state.user;
        userController.logIn(postData).then(response => {
            if (response.status == 'success') {
                this.setState({
                    user: {
                        username: response.username,
                        password: response.password,
                        uuid: response.uuid
                    },
                    isSignIn: true
                });
                Auth.authenticateUser(this.state.user);
                hashHistory.goBack();
                ;
            }
            else {
                this.setState({
                    error: response.desc
                });
            }
        });
    }

    onChange(event) {
        event.preventDefault();
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user: user
        });
    }

    responseFacebook(response) {
        this.setState({
            'isSignIn': true
        });

        let authData = {
            'username': response.name,
            'email': response.email,
            'token': response.accessToken
        };

        Auth.authenticateUser(authData);
        setTimeout(hashHistory.goBack(), 1000);
    }

    responseGoogle(response) {
        console.log(response);

        this.setState({
            'isSignIn': true
        });

        let authData = {
            'username': response.w3.ig,
            'email': response.w3.U3,
            'token': response.Zi.access_token
        };
        Auth.authenticateUser(authData);
        setTimeout(hashHistory.goBack(), 1000);
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
            <div>
                <h3 style={{textAlign: 'center', 'color': 'rgb(209, 72, 54)', margin: '40px 0px 40px 0px'}}>Please log
                    in</h3>
                <div className="login-box">
                    <div className="lb-header">
                        <Link to="/login" className="active" id="login-box-link">Login</Link>
                        <Link to="/signup" id="signup-box-link">Sign Up</Link>
                    </div>
                    <div className="social-login">
                        <FacebookLogin
                            appId={FACEBOOK_APP_ID}
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                        />

                        <GoogleLogin
                            clientId={GOOGLE_CLIENT_ID}
                            buttonText="Login with Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                    </div>

                    <form className="email-login">
                        <div className="field-line">
                            <TextField className="u-form-group"
                                       label="Username"
                                       name="username"
                                       value={this.state.user.username}
                                       onChange={this.onChange}
                            />
                        </div>

                        <div className="field-line">
                            <TextField className="u-form-group"
                                       label="password"
                                       type="password"
                                       name="password"
                                       value={this.state.user.password}
                                       onChange={this.onChange}
                            />
                        </div>

                        <div className="u-form-group">
                            <button type="button" onClick={this.getAuth}>Log in</button>
                        </div>


                        <div className="u-form-group">
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>

                    </form>

                    {this.state.error ? (
                        <div style={{color: 'red'}}>{this.state.error}</div>
                    ) : (
                        <div></div>
                    )}

                </div>
            </div>
        )
    }
}

export default Login;


