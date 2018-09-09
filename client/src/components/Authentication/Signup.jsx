import React, {PropTypes} from 'react';
import axios from "axios";
import {Link} from 'react-router';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';


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
                <div>
                    <form>
                        <h2 className="card-heading">Register</h2>
                        <div className="field-line">
                            <TextField
                                floatingLabelText="Name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.user.name}
                            />
                        </div>

                        <div className="field-line">
                            <TextField
                                floatingLabelText="username"
                                name="username"
                                onChange={this.onChange}
                                value={this.state.user.username}
                            />
                        </div>

                        <div className="field-line">
                            <TextField
                                floatingLabelText="Email"
                                name="email"
                                onChange={this.onChange}
                                value={this.state.user.email}
                            />
                        </div>

                        <div className="field-line">
                            <TextField
                                floatingLabelText="Password"
                                type="password"
                                name="password"
                                onChange={this.onChange}
                                value={this.state.user.password}
                            />
                        </div>

                        <div className="button-line">
                            <button type="button" onClick={this.signUp}>Sign Up</button>
                        </div>

                        <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
                    </form>
                </div>
            )
        }

    }

}


export default Signup;