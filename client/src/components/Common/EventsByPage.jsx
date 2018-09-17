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
            filters: this.props.filters,
            smallView: this.props.smallView,
            mapView: this.props.mapView,
            imagePreviewUrl: ''
        };
        this.getData = this.getData.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.readImage = this.readImage.bind(this);
        this.readImageSmall = this.readImageSmall.bind(this);

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

        if (!this.isEmpty(this.state.filters)) {
            let filters = this.state.filters;
            data = Object.assign(filters, data);
        }

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

    readImage(file) {
        if (file) {
            return (
                <img style={{width: '100%', height: '250px'}} src={`http://54.169.251.138/media/${file}`}/>
            )
        }
        else {
            return (
                <img style={{width: '100%', height: '250px'}}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhWs2_oaas5sO0iEjtkZKIBG5Civh0-X3Tk1eoO2rnFVLJBdviw"/>
            )
        }
    }

    readImageSmall(file) {
        if (file) {
            return (
                <img
                    src={`http://54.169.251.138/media/${file}`}
                    height="100"
                    width="150"
                    style={{marginRight: '20px', borderRadius: '5px'}}/>
            )
        }
        else {
            return (
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhWs2_oaas5sO0iEjtkZKIBG5Civh0-X3Tk1eoO2rnFVLJBdviw"
                    height="100"
                    width="150"
                    style={{marginRight: '20px', borderRadius: '5px'}}/>
            )
        }

    }

    componentWillMount() {
        this.getData();
    }


    render() {
        if (this.state.events[0] && this.state.events) {
            if (!this.state.mapView) {
                let events;
                if (this.props.eventLimit === 'null') {
                    events = this.state.events;
                }
                else {
                    events = this.state.events.slice(0, this.props.eventLimit);
                }


                const listOfEvents = events.map((event) =>
                    <div key={event.pk} className="row" style={{marginBottom: '-40px'}}>
                        <div className="item col-md-4">
                            <Link to={`/events/${event.pk}`}>
                                {this.readImage(event.fields.image)}
                            </Link>
                            <div className="col-md-12 events-description eventslistartist-grid">
                                <span className="country-label"
                                      style={{textTransform: 'uppercase', backgroundColor: "#FF5A5F"}}>Music</span>
                                <div className="events-text">
                                    <Link to={`/events/${event.pk}`}><h3
                                        style={{textTransform: 'uppercase'}}>{event.fields.event_title}</h3></Link>
                                    <p><span>Date:</span> {event.fields.event_start_date}</p>
                                    <p><span><i className="fas fa-map-marker-alt"
                                                style={{
                                                    fontSize: '14px',
                                                    padding: '2px 3px 2px 3px',
                                                    color: 'rgb(0, 132, 137)',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'white',
                                                    border: '1px solid #ccc',
                                                    margin: '0px 13px 0px 5px'

                                                }}></i></span>{event.fields.address}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                );

                const listOfEventsSmall = events.map((event) =>
                    <div style={{width: '50%'}} key={event.pk}>
                        <div className="event-container">
                            <div className="event-box" style={{marginBottom: '40px'}}>
                                {this.readImageSmall(event.fields.image)}
                                <p className="event-small-category">Music</p>
                                <p className="event-small-title">{event.fields.event_title}</p>
                            </div>
                        </div>
                    </div>
                );
                return (
                    <div>
                        {
                            this.state.smallView ? (
                                <div style={{display: 'flex', flewDirection: 'row', flexWrap: 'wrap'}}>
                                    {listOfEventsSmall}
                                </div>
                            ) : (
                                <div>
                                    {listOfEvents}
                                </div>
                            )

                        }

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
            else if (this.state.mapView) {
                return (
                    <div>
                        <p>Map View</p>
                    </div>
                )
            }

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