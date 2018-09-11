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
                    {listOfEvents}
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