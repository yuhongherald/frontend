import React, {PropTypes} from 'react';


// Showing one event details
class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            event: true
        }
    }

    componentWillMount() {

    }


    render() {
        if (this.state.event) {
            return (
                <div id="section-aboutus" className="section-eventsdetails">
                    <div className="container">
                        <div id="list-view">
                            <div className="col-md-8 the-artist the-artist-horizontal events-page-list pad0 m-bot60">
                                <img src="assets/images/latestblog-img.png" className="img-responsive"/>
                                <div className="text-slider3">
                                    <div>
                                        <span className="country-label">Milano</span>
                                    </div>
                                    <h3>The Awesome Party Event</h3>
                                    <span className="address"><i
                                        className="fa fa-map-marker"></i> 541 Avenue Street, Milano <div
                                        className="rating-stars">
                                    <a href="#"><i className="fa fa-lg fa-star"></i></a>
                                </div></span>
                                    <p><span>Genre:</span> Rock &nbsp;<span>Date:</span> 11/11/2016 &nbsp;
                                        <span>Artists:</span> Jonathan Doe, Megan Tylor &nbsp;<span>People:</span> 5000+
                                    </p>
                                    <div className="pricing">
                                        <i className="fa fa-dollar"></i>
                                        <h1>59</h1>
                                        <p>/ PER PERSON</p>
                                    </div>
                                </div>
                                <div className="contents pad0 col-md-12">
                                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                        consequat, dolore eu nulla facilisis at vero eros accumsan et iusto odio
                                        dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                                        feugait nulla zzril facilisi, consectetuer.<br/><br/>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                        amet. erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, eos ipsum dolor sit amet,
                                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="button-share-events col-md-12 pad0">
                                    <button type="button" className="btn btn-info">
                                        <i className="fab fa-twitter"></i> Twitt
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        <i className="far fa-thumbs-up"></i> Like
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                        <i className="fab fa-google-plus-g"></i>
                                    </button>
                                </div>


                                {/*<div className="col-md-12 pad0 left4">*/}
                                {/*<h3>Photo Gallery</h3>*/}
                                {/*<div className="content pad0">*/}
                                {/*<div className="col-md-3 pad0 col-sm-6 col-xs-12">*/}
                                {/*<img src="assets/images/latestevent-img.png"/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-3 pad0 col-sm-6 col-xs-12">*/}
                                {/*<img src="assets/images/latestevent-img.png"/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-3 pad0 col-sm-6 col-xs-12">*/}
                                {/*<img src="assets/images/latestevent-img.png"/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-3 pad0 col-sm-6 col-xs-12">*/}
                                {/*<img src="assets/images/latestevent-img.png"/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-3 pad0 col-sm-6 col-xs-12">*/}
                                {/*<img src="assets/images/latestevent-img.png"/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-3 pad0 col-sm-6 col-xs-12">*/}
                                {/*<img src="assets/images/latestevent-img.png"/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-3 pad0 col-sm-6 col-xs-12">*/}
                                {/*<img src="assets/images/latestevent-img.png"/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-3 pad0 col-sm-6 col-xs-12">*/}
                                {/*<img src="assets/images/latestevent-img.png"/>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                <div className="col-md-12 pad0 left5">
                                    <h3>Event Position</h3>
                                    <div className="content pad0">
                                        <div id="map"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-right col-md-4">
                        <div className="col-md-12 sidebar-eventsdetails artist-information padr0">
                            <h3>Artist Information</h3>
                            <div className="col-md-3 padl0">
                                <img src="assets/images/photo_Artist_Details.jpg"
                                     className="img-responsive img-circle"/>
                            </div>
                            <div className="col-md-9">
                                <h4>Jack Gillenhall</h4>
                                <span className="country-label">Rock</span>
                                <h5>Singer</h5>
                            </div>
                            <div className="col-md-12 pad0">
                                <h6>Biography</h6>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, invidunt ut labore et
                                    dolore.</p>
                            </div>
                            <div className="col-md-12 pad0 address">
                                <p className="lists"><span>Address</span>: 185 Dow Street3207 Melbourne Australia</p>
                                <p className="lists"><span>Fax:</span> 432 034 544</p>
                                <p className="lists"><span>Phone:</span> 432 034 542</p>
                                <p className="lists"><span>Email:</span> mail@artist.com</p>
                                <p className="lists"><span>Website:</span> artistwebsite.com</p>
                            </div>
                        </div>

                        <div className="col-md-12 address-eventmanager">
                            <div className="col-md-12 pad0 address">
                                <h3>Event: Manager</h3>
                                <h4>John Warlick</h4>
                                <p className="lists"><span>Phone:</span> 432 034 542</p>
                                <p className="lists"><span>Fax:</span> 432 034 544</p>
                                <p className="lists"><span>Email:</span> mail@artist.com</p>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-facebook-f fa-lg"></i></a>
                                    <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g fa-lg"></i></a>
                                    <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>Loading</div>
            )
        }

    }
}

export default Event;