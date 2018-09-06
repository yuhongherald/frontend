import React from 'react';
import './css/Login.css';
import TextField from '@material-ui/core/TextField';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
require('dotenv').config();


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
        console.log(this.state.user);
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
        })
    }

    responseGoogle(response) {
        console.log(response);
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
                        <button onSubmit={this.getAuth}>Sign Up</button>
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


