import React, {PropTypes} from 'react';
import '../Events/css/Events.css';
//import '../Events/css/style.css';
import {events} from '../Events/data.js';
import axios from 'axios';

import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './css/filter.css';
import Filters from './Filters.jsx';

class EventsByPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: false,
            error: false,
            activePage: this.props.activePage,
            isPaneOpen: false,
            isPaneOpenLeft: false
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    getData() {
        // axios.get('/api/vi/event/list', {
        //     params: {
        //         page_limit: 10,
        //         page_num: this.state.activePage
        //     }
        // })
        //     .then(function (response) {
        //         // handle success
        //         this.setState({
        //             events: response.data.events
        //         })
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         this.setState({
        //             error: error.desc
        //         })
        //     })

        this.setState({
            events: events
        })

    }

    componentWillMount() {
        this.getData();
    }


    render() {
        return (
            <div>
                <div>
                {this.getSlidingPane()}
                </div>
                <div>
                {this.getFormattedEventStatus()}
                </div>
            </div>
        )
    }

    getSlidingPane() {
        return <div ref={ref => this.el = ref}>
            <button className = "btn" onClick={() => this.setState({ isPaneOpen: true })}>Click me to open right pane!</button>
            <SlidingPane
                isOpen={ this.state.isPaneOpen }
                title='Filters'
                from='left'
                subtitle='Optional subtitle.'
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                } }>
                <Filters/>
            </SlidingPane>
        </div>;
    }

    getFormattedEventStatus() {
        if (this.state.events) {
            return this.getFormattedEvents();
        }
        else if (this.state.error) {
            return <div>{this.state.error}</div>

        }
        else {
            return <div>Loading</div>
        }

    }

    getForm() {
        const form =
            <div className="card card-body">
                <div className="content-right col-md-3 z10">
                    <div className="sidebar-searchbar col-md-12 pad0 col-sm-12">
                        <h4>FIND AN EVENT</h4>
                        <div id="custom-search-input">
                            <div className="input-group col-xs-12 col-sm-12 col-md-12">
                                <input type="text" className="  search-query form-control" placeholder="Event"/>
                                <span className="input-group-btn"><button className="btn btn-danger" type="button">
										<span className=" glyphicon glyphicon-search"></span>
									</button></span>
                            </div>
                        </div>
                    </div>
                    <p>
                        <button className="pink-borderless mobile-width btn non-mobile-hide" type="button"
                                data-toggle="collapse" data-target="#search" aria-expanded="false"
                                aria-controls="search">
                            Advanced search
                        </button>
                    </p>

                    <div className="collapse light-pink" id="search">
                        <br/>
                        <div className="height-auto sidebar-location col-md-12 pad0 col-sm-12">
                            <h4>LOCATION</h4>
                            <div id="custom-search-input">
                                <div className="input-group col-xs-12 col-sm-12 col-md-12 absolute width-80">
                                    <input type="text" className="  search-query form-control"
                                           placeholder="search for location"/>
                                    <span className="input-group-btn"><button className="btn btn-danger" type="button">
														<span className=" glyphicon glyphicon-search"></span>
													</button></span>
                                </div>
                            </div>
                            <div className="map" id="map"></div>
                        </div>
                        <div className="sidebar-selectdate col-md-12 pad0 col-sm-12">
                            <h4>SELECT DATE</h4>
                            <div className="dates">
                                <input className="form-control date1" id="date1" name="date" placeholder="07/15/2016"
                                       type="text"></input>
                                    <input className="form-control date2" id="date2" name="date"
                                           placeholder="07/15/2016" type="text"></input>
                            </div>
                        </div>
                        <div className="sidebar-popularcategories col-md-12 pad0 col-sm-12 mobile-hidden">
                            <div className="col-md-12 popularcategories-item border-btm">
                                <a href=""><h5>Today</h5></a>
                            </div>
                            <div className="col-md-12 popularcategories-item border-btm">
                                <a href=""></a>
                                <h5>Tomorrow</h5>
                            </div>
                            <div className="col-md-12 popularcategories-item border-btm">
                                <a href=""><h5>This Week</h5></a>
                            </div>
                            <div className="col-md-12 popularcategories-item border-btm">
                                <a href=""><h5>This Weekend</h5></a>
                            </div>
                            <div className="col-md-12 popularcategories-item border-btm">
                                <a href=""><h5>Next Week</h5></a>
                            </div>
                            <div className="col-md-12 popularcategories-item">
                                <a href=""><h5>This Month</h5></a>
                            </div>
                        </div>
                        <div className="genre sidebar-popularcategories col-md-12 pad0 col-sm-12">

                            <h4>TYPE</h4>
                            <div className="col-md-12 popularcategories-item genre-type border-btm">
                                <h5><label>
                                    <div className="custom-checkbox">
                                    </div>
                                </label>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        return form;
    }

    getFormattedEvents() {
        const listOfEvents = this.state.events.map((event) =>
            <div key={event.pk}
                 className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal events-page-list pad0 m-bot60">
                <a href="events-details.html"><img
                    src="../assets/images/latestblog-img.png"
                    className="img-responsive"/></a>
                <div className="text-slider3">
                    <div>
                        <span className="country-label">{event.fields.event_title}</span>
                    </div>
                    <h3>{event.fields.event_desc}</h3>
                    <span className="address"><i className="fa fa-map-marker"></i> 541 Avenue Street, Milano</span>
                    <p>
                        <span>Genre:</span> {event.fields.event_type}
                        <span> Date:</span> {event.fields.event_start_date} - {event.fields.event_end_date}
                        <span>People:</span> {event.fields.num_participants}</p>
                    {/*<div className="pricing">*/}
                    {/*<i className="fa fa-dollar"></i>*/}
                    {/*<h1>59</h1>*/}
                    {/*<p>/ PER PERSON</p>*/}
                    {/*</div>*/}
                </div>
                {/*<div className="contents pad0 col-md-12">*/}
                {/*<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit*/}
                {/*esse molestie consequat, vel illum dolore eu feugiat nulla*/}
                {/*facilisis at vero eros et accumsan et iusto odio dignissim qui*/}
                {/*blandit praesent luptatum zzril delenit augue duis dolore te*/}
                {/*feugait nulla facilisi. Lorem ipsum dolor sit amet,*/}
                {/*consectetuer. orem ipsum dolor sit amet, consetetur sadipscing*/}
                {/*elitr, sed diam nonumy eirmod tempor invidunt ut labore et*/}
                {/*dolore magna aliquyam erat, sed diam voluptua. At vero eos et*/}
                {/*accusam et justo duo dolores et ea rebum. </p>*/}
                {/*</div>*/}
            </div>
        );
        return listOfEvents;
    }
}


export default EventsByPage;