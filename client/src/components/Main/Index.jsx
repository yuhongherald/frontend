import React from 'react';
import {Link} from 'react-router';
import Auth from '../../modules/Auth';
import '../Events/css/Events.css';
import Events from '../Events/Events.jsx';


class Index extends React.Component {

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
            <div>
                <div className="u-form-group-pink"
                     style={{textAlign: 'center', margin: '40px 0px 20px 0px'}}>
                    <Link to={`/events/new`}>
                        <button type="button">Create event</button>
                    </Link>
                </div>
                <Events/>
            </div>
        )
    }
}

export default Index;


