import React, {PropTypes} from 'react';

class MyEvents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: false
        }

    }

    componentWillMount() {

    }

    render() {
        if (this.state.events) {
            return (
                <div>

                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }

    }
}

export default MyEvents;