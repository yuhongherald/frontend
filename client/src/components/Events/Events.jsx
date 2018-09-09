import React from 'react';
import Filters from '../Events/Filters.jsx';
import EventsByPage from '../Events/EventsByPage.jsx';
import Pagination from "react-js-pagination";


class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            totalCount: 300
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
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
                    </div>

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
                                <Filters/>
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

                                </div>


                                <div className="tab-content">
                                    {/*LIST VIEW*/}
                                    <div id="list-view" className="tab-pane fade active in" role="tabpanel">
                                        <EventsByPage activePage={this.state.activePage}/>

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
