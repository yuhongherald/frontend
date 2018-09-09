import React, {PropTypes} from 'react';
import axios from "axios";
import {Link} from 'react-router';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import './css/Login.css';


class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                username: '',
                email: '',
                password: ''

            },
            error: false
        }
        this.onChange = this.onChange.bind(this);
        this.signUp = this.signUp.bind(this);
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

    signUp() {
        console.log(this.state.user);
    }

    componentWillMount() {

    }


    render() {
        if (this.state.error) {
            return (
                <Card>{this.state.error}</Card>
            )
        }
        else {
            return (
                <div className="login-box">
                    <div className="lb-header">
                        <Link to="/login"  id="login-box-link">Login</Link>
                        <Link to="/signup" className="active" id="signup-box-link">Sign Up</Link>
                    </div>
                    <form className="email-login">
                        <h2 className="card-heading">Sign up</h2>
                        <div className="field-line">
                            <TextField
                                label="Full Name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.user.name}
                            />
                        </div>

                        <div className="field-line">
                            <TextField
                                label="Username"
                                name="username"
                                onChange={this.onChange}
                                value={this.state.user.username}
                            />
                        </div>

                        <div className="field-line">
                            <TextField
                                label="Email"
                                name="email"
                                onChange={this.onChange}
                                value={this.state.user.email}
                            />
                        </div>

                        <div className="field-line">
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                onChange={this.onChange}
                                value={this.state.user.password}
                            />
                        </div>

                        <div className="u-form-group">
                            <button type="button" onClick={this.signUp}>Sign Up</button>
                        </div>

                        <div className="u-form-group">
                            <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
                        </div>
                    </form>
                </div>



            )
        }

    }

}


export default Signup;