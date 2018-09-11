import React, {PropTypes} from 'react';
import '../Events/css/Events.css'
import eventController from '../../controllers/eventController.js';
import Pagination from "react-js-pagination";

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
        console.log(`active page is ${pageNumber}`);
        this.setState({
            activePage: pageNumber
        });
    }

    getData() {
        let data = {
            pageLimit: 10,
            pageNum: this.props.activePage
        };
        let response = eventController.getEvents(data);
        console.log(response);
        if (response.status == 'success') {
            this.setState({
                totalCount: response.total_pages,
                events: response.events
            });
        }
        else {
            this.setState({
                error: response.desc
            });
        }

    }

    componentWillMount() {
        this.getData();
    }


    render() {
        if (this.state.events) {
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