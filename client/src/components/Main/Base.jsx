import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Auth from '../../modules/Auth';
import "../Main/css/Index.css";

class Base extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }


    render() {
        const {children} = this.props;

        return (
            <div>
                <div id="navigation-header">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link to="/" className="navbar-brand" >
                                    App name
                                </Link>
                            </div>
                            <span className="pull-right search-btn"><span>
                                <Link to={`/`}> Explore Events</Link></span></span>

                            {/*Navbar, keep the logic*/}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                {Auth.isUserAuthenticated() ? (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li style={styles.navbar}>
                                            <i className="fas fa-user" aria-hidden="true"></i>
                                            {Auth.getUserData().username}
                                        </li>
                                        <li><Link to={`/`}> My schedule</Link></li>
                                        <li><Link to={`/`}> Manage events</Link></li>
                                        <li><Link to={`/events/new`}><button className="create-event">Create events</button></Link></li>

                                        <li><Link to={`/logout`}>Log out</Link></li>
                                    </ul>
                                ) : (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="nav navbar-left-link"><Link to={`/login`}>Log in</Link></li>
                                        <li className="nav"><Link to={`/signup`}>Sign up</Link></li>
                                    </ul>

                                )}
                            </div>
                        </div>
                    </nav>
                </div>
                <div style={{minWidth: '100%'}}>
                    <div style={{height: "118px"}}></div>
                    {children}
                </div>
            </div>

        )
    }

}


export default Base;