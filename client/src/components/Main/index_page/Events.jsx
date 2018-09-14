import React from 'react';
import Filters from '../../Events/filters/Filters.jsx';
import EventsByPage from '../../Common/EventsByPage.jsx';
import '../css/Index.css';


class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filters: {
                event_type: "1"
            }
        };

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
                            <div className="col-md-12 artistlist-title" style={{marginBottom: '80px'}}>
                                <h3 style={{display: 'inline-block', float: 'left'}}>Popular Events</h3>
                                <span style={{display: 'inline-block', float: 'right', marginTop: '20px', color: '#8f939c'}}><p><span className="viewAll">View all</span> <i className="fas fa-chevron-right" style={{fontSize: '1em', padding: '0px 0px 0px 10px'}}></i> </p></span>
                            </div>

                            <div className="content-right col-md-9">
                                <div className="tab-content">
                                    {/*LIST VIEW*/}
                                    <div id="list-view" className="tab-pane fade active in" role="tabpanel">
                                        <EventsByPage activePage={this.state.activePage} eventLimit={3} pagination={false}
                                                      sortBy={'num_participants'}
                                                      filters={this.state.filters}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 artistlist-title" >
                                <h3 style={{display: 'inline-block', float: 'left', marginBottom: '40px'}}>All Events</h3>
                                <span style={{display: 'inline-block', float: 'right', marginTop: '20px', color: '#8f939c'}}><p><span className="viewAll">View all</span> <i className="fas fa-chevron-right" style={{fontSize: '1em', padding: '0px 0px 0px 10px'}}></i> </p></span>
                            </div>

                            <div className="content-right col-md-9">
                                <div className="tab-content">
                                    {/*LIST VIEW*/}
                                    <div id="list-view" className="tab-pane fade active in" role="tabpanel">
                                        <EventsByPage activePage={this.state.activePage} eventLimit={3} pagination={false}
                                                      sortBy={'event_start_date'}
                                                      filters={this.state.filters}
                                        />
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
