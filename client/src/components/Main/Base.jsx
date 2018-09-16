import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Auth from '../../modules/Auth';
import Navbar from './Navbar.jsx';

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
                    <Navbar/>
                </div>
                <div style={{minWidth: '100%'}}>
                    {children}
                </div>
            </div>

        )
    }

}


export default Base;