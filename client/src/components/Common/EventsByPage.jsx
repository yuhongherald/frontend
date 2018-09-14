import React, {PropTypes} from 'react';
import '../Events/css/Events.css';
import eventController from '../../controllers/eventController.js';
import Pagination from "react-js-pagination";
import {Link} from 'react-router';


class EventsByPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: false,
            error: false,
            activePage: 1,
            totalCount: 300,
            totalPages: 1,
            sortBy: this.props.sortBy,
            filters: this.props.filters
        };
        this.getData = this.getData.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);

    }

    handlePageChange(pageNumber) {
        this.setState({
            activePage: pageNumber
        });
    }

    isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    getData() {
        let data = {
            page_limit: "10",
            page_num: this.state.activePage.toString()
        };

        // if (!this.isEmpty(this.state.filters)) {
        //     let filters = this.state.filters;
        //     data = Object.assign(filters, data);
        //
        // }

        eventController.getEvents(data).then(response => {
            if (response.status === 'success') {
                this.setState({
                    totalCount: response.total_pages,
                    events: JSON.parse(response.events)
                });
            }
            else {
                this.setState({
                    error: response.desc
                });
            }
        });

    }

    componentWillMount() {
        this.getData();
    }


    render() {
        if (this.state.events[0] && this.state.events) {
            let events;
            if (this.props.eventLimit === 'null') {
                events = this.state.events;
            }
            else {
                events = this.state.events.slice(0, this.props.eventLimit);
            }
            const listOfEvents = events.map((event) =>
                <div key={event.pk}
                     className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal events-page-list pad0 m-bot60">
                    <a href="events-details.html"><img
                        src="/assets/images/latestblog-img.png"
                        className="img-responsive"/></a>
                    <div className="text-slider3">
                        <div>
                            <Link to={`/events/${event.pk}`}><span
                                className="country-label">{event.fields.event_title}</span></Link>
                        </div>
                        <Link to={`/events/${event.pk}`}><h3>{event.fields.event_desc}</h3></Link>
                        <span className="address" style={{fontSize: '0.9em'}}><i className="fas fa-map-marker-alt"
                                                                                 style={{
                                                                                     fontSize: '10px',
                                                                                     padding: '0px 6px 0px 0px'
                                                                                 }}></i>541 Avenue Street, Milano</span>
                        <p>
                            <span>Category: </span>{event.fields.event_type}<br/>
                            <span>Date: </span> {event.fields.event_start_date} - {event.fields.event_end_date}<br/>
                            <span>People: </span>{event.fields.num_participants}
                        </p>
                    </div>

                </div>
            );
            return (
                <div>
                    <div>
                        {listOfEvents}
                    </div>

                    {/*PAGINATION*/}
                    {
                        this.props.pagination ? (
                            <div className="col-md-12 pad0 pagination-section text-center pos-inherit">
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={10}
                                    totalItemsCount={this.state.totalCount}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange}
                                />
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </div>
            )
        }
        else if (!this.state.events[0] && this.state.events) {
            return (
                <div>No event</div>
            )
        }
        else if (this.state.error) {
            return (
                <div>{this.state.error}</div>
            )

        }
        else {
            return (
                <div>Loading</div>
            )
        }

    }
}


export default EventsByPage;