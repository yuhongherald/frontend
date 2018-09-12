import React from 'react';
import Filters from '../Events/Filters.jsx';
import EventsByPage from '../Events/EventsByPage.jsx';


class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

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
                <div id="section-contentblogs" className="section-artistlist">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center artistlist-title">
                                <h3>All Events</h3>
                            </div>

                            <div className="content-right col-md-9">
                                <div className="tab-content">
                                    {/*LIST VIEW*/}
                                    <div id="list-view" className="tab-pane fade active in" role="tabpanel">
                                        <EventsByPage activePage={this.state.activePage}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Section Latest Artist*/}
            </div>

        )
    }
}

export default Events;
