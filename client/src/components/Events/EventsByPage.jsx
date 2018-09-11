import React, {PropTypes} from 'react';
import '../Events/css/Events.css'
import {events} from '../Events/data.js';
import axios from 'axios';

class EventsByPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: false,
            error: false,
            activePage: this.props.activePage
        }
        this.getData = this.getData.bind(this);

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
                {this.getForm()}
                </div>
                <div>
                {this.getFormattedEventStatus()}
                </div>
            </div>
        )
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
        return
        <div>
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
                            data-toggle="collapse" data-target="#search" aria-expanded="false" aria-controls="search">
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
                                <input className="form-control date2" id="date2" name="date" placeholder="07/15/2016"
                                       type="text"></input>
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
                                    <input type="checkbox" className="list-5" name="list-5" id="list-5" value=""> Party</input>
                                        <label htmlFor="list-5"></label>
                                </div>
                            </label>
                            </h5>
                        </div>
                        <div className="col-md-12 popularcategories-item genre-type border-btm">
                            <h5><label>
                                <div className="custom-checkbox">
                                    <input type="checkbox" className="list-6" name="list-6" id="list-6"
                                           value=""> Festival</input>
                                        <label htmlFor="list-6"></label>
                                </div>
                            </label>
                            </h5>
                        </div>
                        <div className="col-md-12 popularcategories-item genre-type border-btm">
                            <h5><label>
                                <div className="custom-checkbox">
                                    <input type="checkbox" className="list-7" name="list-7" id="list-7" value=""> Dance
                                        Hall</input>
                                        <label htmlFor="list-7"></label>
                                </div>
                            </label>
                            </h5>
                        </div>
                        <div className="col-md-12 popularcategories-item genre-type">
                            <h5><label>
                                <div className="custom-checkbox">
                                    <input type="checkbox" className="list-8" name="list-8" id="list-8"
                                           value=""> Outdoor</input>
                                        <label htmlFor="list-8"></label>
                                </div>
                            </label>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-right col-md-9">
            <div className="row">
                <div className="col-md-10 col-sm-12 col-xs-12 show-result sort-by">
                    <h4 className="title"> SORT BY </h4>
                    <select className="selectpicker" id="sort">
                        <option>Artist</option>
                        <option>Popularity</option>
                        <option>Distance</option>
                        <option>Time</option>
                    </select>
                </div>
                <div className="col-md-2 col-sm-12 col-xs-12 view-wrap">
                    <ul className="nav-tabs tabination view-tabs">
                        <li>
                            <a href="#grid-view" data-toggle="tab"> <i className="fa-th-large fa fa-2x"></i></a>
                        </li>
                        <li className="active">
                            <a href="#list-view" data-toggle="tab"> <i className="fa-th-list fa fa-2x"
                                                                       aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#locations-view" data-toggle="tab"> <i className="fa-map-marker fa fa-2x"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content">
                <!-- LIST VIEW -->
                <div id="list-view" className="tab-pane fade active in" role="tabpanel">
                    <div
                        className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal artist-list pad0 m-bot60">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <div className="title pad0">
                            <h3>KEVIN HARRIS</h3>
                            <h5>HOUSE MUSIC</h5>
                        </div>
                        <div className="social-links">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                        <div className="contents pad0">
                            <p className="contents-title">Biography</p>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
                                dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                        </div>
                    </div>
                    <div
                        className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal artist-list pad0 m-bot60">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <div className="title pad0">
                            <h3>KEVIN HARRIS</h3>
                            <h5>HOUSE MUSIC</h5>
                        </div>
                        <div className="social-links">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                        <div className="contents pad0">
                            <p className="contents-title">Biography</p>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
                                dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                        </div>
                    </div>
                    <div
                        className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal artist-list pad0 m-bot60">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <div className="title pad0">
                            <h3>KEVIN HARRIS</h3>
                            <h5>HOUSE MUSIC</h5>
                        </div>
                        <div className="social-links">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                        <div className="contents pad0">
                            <p className="contents-title">Biography</p>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
                                dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal artist-list pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <div className="title pad0">
                            <h3>KEVIN HARRIS</h3>
                            <h5>HOUSE MUSIC</h5>
                        </div>
                        <div className="social-links">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                        <div className="contents pad0">
                            <p className="contents-title">Biography</p>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
                                dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                        </div>
                    </div>
                    <!-- PAGINATION -->
                    <div className="col-md-12 pad0 pagination-section text-center m-top95 pos-inherit">
                        <ul className="pagination">
                            <li>
                                <a href="#"><i className="fa fa-chevron-left"></i> PREV</a>
                            </li>
                            <li className="active">
                                <a href="#">01 <span className="sr-only">(current)</span></a>
                            </li>
                            <li>
                                <a href="#">02</a>
                            </li>
                            <li>
                                <a href="#">03</a>
                            </li>
                            <li>
                                <a href="#">04</a>
                            </li>
                            <li>
                                <a href="#">05</a>
                            </li>
                            <li>
                                <a href="#">NEXT <i className="fa fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- GRID VIEW -->
                <div id="grid-view" className="tab-pane fade" role="tabpanel">
                    <div className="col-md-4 text-center the-artist col-sm-6 pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <h3>Kevin Harris</h3>
                        <p>House Music</p>
                        <div className="social-links text-center">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center the-artist col-sm-6 pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <h3>Lucas Graham</h3>
                        <p>Beats</p>
                        <div className="social-links text-center">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center the-artist col-sm-6 pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <h3>Marcus Neil</h3>
                        <p>Hip-Hop</p>
                        <div className="social-links text-center">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center the-artist col-sm-6 pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <h3>Kevin Harris</h3>
                        <p>House Music</p>
                        <div className="social-links text-center">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center the-artist col-sm-6 pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <h3>Lucas Graham</h3>
                        <p>Beats</p>
                        <div className="social-links text-center">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center the-artist col-sm-6 pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <h3>Marcus Neil</h3>
                        <p>Hip-Hop</p>
                        <div className="social-links text-center">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center the-artist col-sm-6 pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <h3>Kevin Harris</h3>
                        <p>House Music</p>
                        <div className="social-links text-center">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center the-artist col-sm-6 pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <h3>Lucas Graham</h3>
                        <p>Beats</p>
                        <div className="social-links text-center">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center the-artist col-sm-6 pad0">
                        <a href="artist-details.html"><img src="assets/images/artist-img.png"></img></a>
                        <h3>Marcus Neil</h3>
                        <p>Hip-Hop</p>
                        <div className="social-links text-center">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <!-- PAGINATION -->
                    <div className="col-md-12 pad0 pagination-section text-center pos-inherit">
                        <ul className="pagination">
                            <li>
                                <a href="#"><i className="fa fa-chevron-left"></i> PREV</a>
                            </li>
                            <li className="active">
                                <a href="#">01 <span className="sr-only">(current)</span></a>
                            </li>
                            <li>
                                <a href="#">02</a>
                            </li>
                            <li>
                                <a href="#">03</a>
                            </li>
                            <li>
                                <a href="#">04</a>
                            </li>
                            <li>
                                <a href="#">05</a>
                            </li>
                            <li>
                                <a href="#">NEXT <i className="fa fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- GRID LOCATIONS VIEW -->
                <div id="locations-view" className="tab-pane fade tab-pane-map2" role="tabpanel">
                    <div id="map2"></div>
                </div>
            </div>
        </div>
        </div>
    }

    getFormattedEvents() {
        const listOfEvents = this.state.events.map((event) =>
            <div key={event.pk}
                 className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal events-page-list pad0 m-bot60">
                <a href="events-details.html"><img
                    src="assets/images/latestblog-img.png"
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
        return listOfEvents();
    }
}


export default EventsByPage;