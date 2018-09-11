import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Auth from '../../modules/Auth';

const styles = {
    navbar: {
        color: '#f55692',
        paddingTop: '10px'
    },
};

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
                                <span className="pull-right search-btn"><span
                                    className="glyphicon glyphicon-search"></span></span>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    {Auth.isUserAuthenticated() ? (
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><Link to={`/`}>Events</Link></li>
                                            <li style={styles.navbar}>
                                                <i className="fas fa-user" aria-hidden="true"></i>
                                                {Auth.getUserData().username}
                                            </li>
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
                </div>


                <div style={{marginTop: '118px', minWidth: '100%'}}>
                    {children}
                </div>


            </div>

        )
    }
}


export default Base;