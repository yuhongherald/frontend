import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Auth from '../../modules/Auth';
import Index from '../Main/Index.jsx';


const styles = {
    navbar: {
        display: 'inline-block',
        color: 'yellow',
        marginLeft: '5px',
        marginRight: '5px'
    },
};

class Base extends React.Component {

    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }


    render() {
        const { children } = this.props;

        return (
            <div>
                <header id='header' style={{marginBottom: '0px'}}>
                    <h1>
                        <a href='/'>
                            Hello
                        </a>
                    </h1>

                    {Auth.isUserAuthenticated() ? (
                        <div style={{float: 'right', width: '400px'}}>
                            <p style={styles.navbar}>
                                <i className="fa fa-user user-icon" aria-hidden="true"></i>
                                {Auth.getUserData().d.EmailAddress}
                            </p>
                            <p style={styles.navbar}><Link to="/logout">Log out</Link></p>
                            <p style={styles.navbar}><Link to="/checkout">Check out</Link></p>
                        </div>
                    ) : (
                        <div id='notifications'>
                            <p className="nav navbar-left-link"><Link to="/login">Log in</Link></p>
                            <p className="nav"><Link to="/signup">Register</Link></p>
                        </div>
                    )}

                </header>

                {Auth.isUserAuthenticated() ? (
                    <div style={{marginTop: '50px'}}>
                        <Index/>
                    </div>
                ) : (
                    <div></div>
                )}

                <div style={{marginBottom: '80px'}}>
                    {children}
                </div>

            </div>
        )
    }
}



export default Base;