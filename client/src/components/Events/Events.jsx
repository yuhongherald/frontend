import React from 'react';
import {Link} from 'react-router-dom';
import Filters from '../Events/Filters.jsx';


class Events extends React.Component {

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
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="assets/images/slider.jpg" height="650"/>
                            <div className="container text-slide">
                                <div className="text-slider4">
                                    <div>
                                        <span className="country-label">Milano</span>
                                    </div>
                                    <h3>The Awesome Party Event</h3>
                                    <span className="address"><i className="fa fa-map-marker"></i> 541 Avenue Street, Milano</span>
                                    <p><span>Genre:</span> Rock &nbsp <span>Date:</span> 11/11/2016
                                        &nbsp <span>Artists:</span> Jonathan Doe, Megan Tylor
                                        &nbsp<span>People:</span> 5000+</p>
                                    <div className="pricing">
                                        <i className="fa fa-dollar"></i>
                                        <h1>59</h1>
                                        <p>/ PER PERSON</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/slider.jpg" height="650"/>
                            <div className="container text-slide">
                                <div className="text-slider4">
                                    <div>
                                        <span className="country-label">Milano</span>
                                    </div>
                                    <h3>The Awesome Party Event</h3>
                                    <span className="address"><i className="fa fa-map-marker"></i> 541 Avenue Street, Milano</span>
                                    <p><span>Genre:</span> Rock &nbsp <span>Date:</span> 11/11/2016
                                        &nbsp <span>Artists:</span> Jonathan Doe, Megan Tylor
                                        &nbsp<span>People:</span> 5000+</p>
                                    <div className="pricing">
                                        <i className="fa fa-dollar"></i>
                                        <h1>59</h1>
                                        <p>/ PER PERSON</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/slider.jpg" height="650"/>
                            <div className="container text-slide">
                                <div className="text-slider4">
                                    <div>
                                        <span className="country-label">Milano</span>
                                    </div>
                                    <h3>The Awesome Party Event</h3>
                                    <span className="address"><i className="fa fa-map-marker"></i> 541 Avenue Street, Milano</span>
                                    <p><span>Genre:</span> Rock &nbsp <span>Date:</span> 11/11/2016
                                        &nbsp <span>Artists:</span> Jonathan Doe, Megan Tylor
                                        &nbsp<span>People:</span> 5000+</p>
                                    <div className="pricing">
                                        <i className="fa fa-dollar"></i>
                                        <h1>59</h1>
                                        <p>/ PER PERSON</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Add Pagination*/}
                    <div className="swiper-pagination"></div>
                    {/*Add Arrows*/}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
                {/*Section Slider*/}
                {/*Section Breadcrumb*/}
                <div id="section-breadcrumb">
                    <div className="container">
                        <div className="col-md-12 content-breadcrumb">
                            <p><a href="index.html">Homepage</a> <span><i
                                className="fa fa-chevron-right"></i></span> Events Page List</p>
                        </div>
                    </div>
                </div>
                {/*Section Breadcrumb*/}
                {/*Section Latest Artist*/}
                <div id="section-contentblogs" className="section-artistlist">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center artistlist-title">
                                <h3>Events Page List</h3>
                                <p>Subtitle goes here.</p>
                            </div>
                            <div className="content-right col-md-3 z10">
                                <div className="sidebar-searchbar col-md-12 pad0 col-sm-12">
                                    <h4>SEARCH BAR</h4>
                                    <div id="custom-search-input">
                                        <div className="input-group col-xs-12 col-sm-12 col-md-12">
                                            <input type="text" className="search-query form-control"
                                                   placeholder="search for something"/>
                                            <span className="input-group-btn"><button className="btn btn-danger"
                                                                                      type="button">
                                            <span className=" glyphicon glyphicon-search"></span>
                                        </button></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-googlemap col-md-12 pad0 col-sm-12">
                                    <h4>GOOGLE MAP</h4>
                                    <div id="map"></div>
                                    <div className="custom-checkbox list-0">
                                        <input type="checkbox" className="list-0" name="list-0" id="list-0"
                                               value="other"/> near me
                                        <label htmlFor="list-0"></label>
                                    </div>
                                </div>
                                <div className="sidebar-location col-md-12 pad0 col-sm-12">
                                    <h4>LOCATION</h4>
                                </div>
                                <div className="sidebar-selectdate col-md-12 pad0 col-sm-12">
                                    <h4>SELECT DATE</h4>
                                    <div className="dates">
                                    </div>
                                </div>
                                <div className="sidebar-popularcategories col-md-12 pad0 col-sm-12">
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
                                <Filters />
                            </div>
                            <div className="content-right col-md-9">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12 col-xs-12 show-result">
                                        <h4 className="title"> FILTER SELECTED </h4>
                                        <div className="col-md-4 col-sm-1 col-xs-2 tagss pad0">
                                    <span className="alert custom-tags alert-dismissible" role="alert"><button
                                        type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button> Genre</span>
                                        </div>
                                        <div className="col-md-4 col-sm-1 col-xs-2 tagss pad0">
                                    <span className="alert custom-tags alert-dismissible" role="alert"><button
                                        type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button> Typee</span>
                                        </div>
                                        <div className="col-md-4 col-sm-1 col-xs-2 tagss pad0">
                                    <span className="alert custom-tags alert-dismissible" role="alert"><button
                                        type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button> Price</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12 show-result sort-by">
                                        <h4 className="title"> SORT BY </h4>
                                        <div className="date-filters">
                                            <input className="form-control date1" id="date3" name="date"
                                                   placeholder="07/15/2016" type="text"/>
                                            <input className="form-control date2" id="date4" name="date"
                                                   placeholder="07/15/2016" type="text"/>
                                            <button type="button" className="btn btn-black">FILTER</button>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-12 col-xs-12 view-wrap">
                                        <ul className="nav-tabs tabination view-tabs">
                                            <li>
                                                <a href="#grid-view" data-toggle="tab"> <i
                                                    className="fa-th-large fa fa-2x"></i></a>
                                            </li>
                                            <li className="active">
                                                <a href="#list-view" data-toggle="tab"> <i
                                                    className="fa-th-list fa fa-2x" aria-hidden="true"></i></a>
                                            </li>
                                            <li>
                                                <a href="#locations-view" data-toggle="tab"> <i
                                                    className="fa-map-marker fa fa-2x"></i></a>
                                            </li>
                                        </ul>

                                    </div>

                                </div>


                                <div className="tab-content">
                                    {/*LIST VIEW*/}
                                    <div id="list-view" className="tab-pane fade active in" role="tabpanel">
                                        <div
                                            className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal events-page-list pad0 m-bot60">
                                            <a href="events-details.html"><img
                                                src="assets/images/latestblog-img.png"
                                                className="img-responsive"/></a>
                                            <div className="text-slider3">
                                                <div>
                                                    <span className="country-label">Milano</span>
                                                </div>
                                                <h3>The Awesome Party Event</h3>
                                                <span className="address"><i className="fa fa-map-marker"></i> 541 Avenue Street, Milano</span>
                                                <p><span>Genre:</span> Rock &nbsp<span>Date:</span> 11/11/2016
                                                    &nbsp <span>Artists:</span> Jonathan Doe, Megan Tylor
                                                    &nbsp<span>People:</span> 5000+</p>
                                                <div className="pricing">
                                                    <i className="fa fa-dollar"></i>
                                                    <h1>59</h1>
                                                    <p>/ PER PERSON</p>
                                                </div>
                                            </div>
                                            <div className="contents pad0 col-md-12">
                                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                                                    esse molestie consequat, vel illum dolore eu feugiat nulla
                                                    facilisis at vero eros et accumsan et iusto odio dignissim qui
                                                    blandit praesent luptatum zzril delenit augue duis dolore te
                                                    feugait nulla facilisi. Lorem ipsum dolor sit amet,
                                                    consectetuer. orem ipsum dolor sit amet, consetetur sadipscing
                                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                                    accusam et justo duo dolores et ea rebum. </p>
                                            </div>
                                        </div>
                                        <div
                                            className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal events-page-list pad0 m-bot60">
                                            <a href="events-details.html"><img
                                                src="assets/images/latestblog-img.png"
                                                className="img-responsive"/></a>
                                            <div className="text-slider3">
                                                <div>
                                                    <span className="country-label">Milano</span>
                                                </div>
                                                <h3>The Awesome Party Event</h3>
                                                <span className="address"><i className="fa fa-map-marker"></i> 541 Avenue Street, Milano</span>
                                                <p><span>Genre:</span> Rock &nbsp<span>Date:</span> 11/11/2016
                                                    &nbsp <span>Artists:</span> Jonathan Doe, Megan Tylor
                                                    &nbsp<span>People:</span> 5000+</p>
                                                <div className="pricing">
                                                    <i className="fa fa-dollar"></i>
                                                    <h1>59</h1>
                                                    <p>/ PER PERSON</p>
                                                </div>
                                            </div>
                                            <div className="contents pad0 col-md-12">
                                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                                                    esse molestie consequat, vel illum dolore eu feugiat nulla
                                                    facilisis at vero eros et accumsan et iusto odio dignissim qui
                                                    blandit praesent luptatum zzril delenit augue duis dolore te
                                                    feugait nulla facilisi. Lorem ipsum dolor sit amet,
                                                    consectetuer. orem ipsum dolor sit amet, consetetur sadipscing
                                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                                    accusam et justo duo dolores et ea rebum. </p>
                                            </div>
                                        </div>
                                        <div
                                            className="col-md-12 col-sm-12 col-xs-12 the-artist the-artist-horizontal events-page-list pad0 m-bot60">
                                            <a href="events-details.html"><img
                                                src="assets/images/latestblog-img.png"
                                                className="img-responsive"/></a>
                                            <div className="text-slider3">
                                                <div>
                                                    <span className="country-label">Milano</span>
                                                </div>
                                                <h3>The Awesome Party Event</h3>
                                                <span className="address"><i className="fa fa-map-marker"></i> 541 Avenue Street, Milano</span>
                                                <p><span>Genre:</span> Rock &nbsp<span>Date:</span> 11/11/2016
                                                    &nbsp <span>Artists:</span> Jonathan Doe, Megan Tylor
                                                    &nbsp<span>People:</span> 5000+</p>
                                                <div className="pricing">
                                                    <i className="fa fa-dollar"></i>
                                                    <h1>59</h1>
                                                    <p>/ PER PERSON</p>
                                                </div>
                                            </div>
                                            <div className="contents pad0 col-md-12">
                                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                                                    esse molestie consequat, vel illum dolore eu feugiat nulla
                                                    facilisis at vero eros et accumsan et iusto odio dignissim qui
                                                    blandit praesent luptatum zzril delenit augue duis dolore te
                                                    feugait nulla facilisi. Lorem ipsum dolor sit amet,
                                                    consectetuer. orem ipsum dolor sit amet, consetetur sadipscing
                                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                                    accusam et justo duo dolores et ea rebum. </p>
                                            </div>
                                        </div>
                                        {/*PAGINATION*/}
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
                                    {/*GRID VIEW*/}
                                    <div id="grid-view" className="tab-pane fade eventslistartist-item"
                                         role="tabpanel">
                                        <div className="row">
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item col-md-4">
                                                <a href="events-details.html"><img
                                                    src="assets/images/featured-img.png" width="100%" height="250"/></a>
                                                <div className="col-md-12 events-description eventslistartist-grid">
                                                    <span className="country-label">Milano</span>
                                                    <div className="events-text">
                                                        <h3>Greenday Live Open Air</h3>
                                                        <p><span>Genre:</span> Rock <span>Date:</span> 11/11/2016
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*PAGINATION*/}
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
                                    {/*GRID LOCATIONS VIEW*/}
                                    <div id="locations-view" className="tab-pane fade tab-pane-map2"
                                         role="tabpanel">
                                        <div id="map2"></div>
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
