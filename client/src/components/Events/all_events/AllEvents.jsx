import React, {PropTypes} from 'react';
import '../../Main/css/CategoryList.css';
import '../../Events/css/Events.css';
import {Link} from 'react-router';
import EventsByPage from "../../Common/EventsByPage.jsx";


class AllEvents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: true,
            filters: {
                event_type: "1"
            }
        }

    }


    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div>
                    <div className="parent border-top-bottom" style={{padding: '20px 0px 20px 00px'}}>
                        <div className="child child-60"><p>Arts</p></div>
                        <div className="child child-60"><p>Food</p></div>
                        <div className="child child-60"><p>Sports</p></div>
                        <div className="child child-60 last-child-60"><p>Social</p></div>
                    </div>
                </div>
                <div style={{backgroundColor: "#f2f2f2", height: '100%', marginTop: '-20px'}}>
                    <h4 style={{padding: '20px 20px', textAlign: 'center', fontWeight: 'bold'}}>All events</h4>
                    <div className="content-right col-md-9">
                        <div className="tab-content">
                            {/*LIST VIEW*/}
                            <div id="list-view" className="tab-pane fade active in" role="tabpanel">
                                <EventsByPage activePage={this.state.activePage}
                                              eventLimit="null"
                                              pagination={true}
                                              filters={this.state.filters}
                                              sortBy={'event_start_date'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllEvents;