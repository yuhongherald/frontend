import React, {PropTypes} from 'react';
import axios from "axios";
import {Link} from 'react-router';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import './css/Login.css';
import Auth from "../../modules/Auth";
import userController from "../../controllers/userController";
import Modal from 'react-responsive-modal';


class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                username: '',
                phone_number: '',
                email: '',
                password: ''

            },
            user_token: '',
            openTokenModal: false,
            error: false,
            isVerified: false,
            isRegistered: false
        }
        this.onChange = this.onChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.onOpenTokenModal = this.onOpenTokenModal.bind(this);
        this.onCloseTokenModal = this.onCloseTokenModal.bind(this);
        this.verify = this.verify.bind(this);
        this.onChangeToken = this.onChangeToken.bind(this);
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

    onChangeToken(event) {
        event.preventDefault();
        this.setState({
            user_token: event.target.value
        });
        console.log(this.state.user_token);
    }

    signUp() {
        let postData = this.state.user;
        console.log(postData);
        userController.register(postData).then(response => {
            console.log(response);
            if (response.status === 'success') {
                this.setState({
                    openTokenModal: true,
                    isRegistered: true
                });
                Auth.setID(response.uid);

            }
            else {
                this.setState({
                    error: response.desc
                });
            }
        });
    }

    verify() {
        console.log()
        let postData = {
            user_token: this.state.user_token,
            uid: Auth.getID()
        }
        userController.confirmAccount(postData).then(response => {
            if (response.status === 'success') {
                this.setState({
                    isVerified: true,
                    openTokenModal: false
                });
            }
            else {
                this.setState({
                    error: response.desc
                });
            }
        });
    }

    onOpenTokenModal() {
        this.setState({openTokenModal: true});
    }

    onCloseTokenModal() {
        this.setState({openTokenModal: true});
    }


    componentWillMount() {

    }


    render() {
        if (this.state.error && !this.state.isRegistered) {
            return (
                <Card>{this.state.error}</Card>
            )
        }
        else if(this.state.isVerified) {
            return (
                <Card><h2>You have successfully registered. You can now sign in</h2></Card>
            )
        }
        else {
            return (
                <div>
                    <Modal open={this.state.openTokenModal} onClose={this.onCloseTokenModal} center
                           className="popup centred">

                        <p>Please key in the registration code sent to your mobile number</p>
                        <form>
                            <div className="field-line">
                                <TextField
                                    type="text"
                                    name="user_token"
                                    onChange={this.onChangeToken}
                                    value={this.state.user_token}
                                />
                            </div>

                            <div className="u-form-group">
                                <button type="button" onClick={this.verify}>Verify</button>
                            </div>

                        </form>

                        {
                            this.state.error && this.state.isRegistered ? (
                                <Card>{this.state.error}</Card>
                            ) : (
                                <div></div>
                            )
                        }
                    </Modal>
                    <div className = "login-box" >
                        <div className="lb-header">
                            <Link to="/login" id="login-box-link"> Login </Link>
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
                                    label="Phone number"
                                    name="phone_number"
                                    onChange={this.onChange}
                                    value={this.state.user.phone_number}
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
                </div>
            )
        }

    }

}

export default Signup;