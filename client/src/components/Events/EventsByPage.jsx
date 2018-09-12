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
            totalPages: 1
        };
        this.getData = this.getData.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);

    }

    handlePageChange(pageNumber) {
        this.setState({
            activePage: pageNumber
        });
    }

    getData() {
        let data = {
            pageLimit: 10,
            pageNum: this.state.activePage
        };

        eventController.getEvents(data).then(response => {
            if (response.status == 'success') {
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
            const listOfEvents = this.state.events.map((event) =>
                <div key={event.pk}
                     className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal events-page-list pad0 m-bot60">
                    <a href="events-details.html"><img
                        src="assets/images/latestblog-img.png"
                        className="img-responsive"/></a>
                    <div className="text-slider3">
                        <div>
                            <Link to={`/events/${event.pk}`}><span className="country-label">{event.fields.event_title}</span></Link>
                        </div>
                        <Link to={`/events/${event.pk}`}><h3>{event.fields.event_desc}</h3></Link>
                        <span className="address"><i className="fa fa-map-marker"></i> 541 Avenue Street, Milano</span>
                        <p>
                            <span>Genre:</span> {event.fields.event_type}
                            <span> Date:</span> {event.fields.event_start_date} - {event.fields.event_end_date}
                            <span>People:</span> {event.fields.num_participants}</p>
                    </div>

                </div>
            );
            return (
                <div>
                    <div>
                        {listOfEvents}
                    </div>

                    {/*PAGINATION*/}
                    <div className="col-md-12 pad0 pagination-section text-center pos-inherit">
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={this.state.totalCount}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                        />
                    </div>
                </div>
            )
        }
        else if (!this.state.events[0]) {
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