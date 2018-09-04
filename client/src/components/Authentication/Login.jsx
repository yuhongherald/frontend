import React from 'react';
import {Link} from 'react-router';
import './css/Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillMount() {

    }

    componentDidUpdate() {

    }

    render() {

        return (


            <div className="login-box">
                <div className="lb-header">
                    <a href="#" className="active" id="login-box-link">Login</a>
                    <a href="#" id="signup-box-link">Sign Up</a>
                </div>
                <div className="social-login">
                    <a href="#">
                        <i className="fab fa-facebook-f fa-lg"></i>
                        Login in with facebook
                    </a>
                    <a href="#">
                        <i className="fab fa-google-plus-g fa-lg"></i>
                        log in with Google
                    </a>
                </div>

                <form action="/">
                    <h2 className="card-heading">Create a new account</h2>

                    <div className="field-line">
                        <TextField className="u-form-group"
                            name="email"

                        />
                    </div>

                    <div className="field-line">
                        <TextField className="u-form-group"
                            type="password"
                            name="password"

                        />
                    </div>


                    <div className="u-form-group">
                        <button>Sign Up</button>
                    </div>


                    <Card>Don't have an account? <Link to="/signup">Create one</Link>.</Card>
                </form>

            </div>
        )
    }
}

export default Login;


