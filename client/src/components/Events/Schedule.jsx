import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, {PropTypes} from 'react';
import '../Events/css/Events.css';
import "../Events/css/schedule.css";

import Modal from 'react-modal';
import './css/filter.css';

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
    }

    getData() {
    }

    componentWillMount() {
        this.getData();
    }


    render() {
        return (
            <div>
                {this.getSchedule()}
            </div>
        )
    }

    getSchedule() {
        return <div>
            <Tabs>
                <TabList className="tabList">
                    <Tab className="btn tab">Created Events</Tab>
                    <Tab className="btn tab">Attending Events</Tab>
                </TabList>

                <TabPanel className="tab-container createdEvents">
                    <br />
                    {this.createEventTemplateEditable()}
                    <br />
                </TabPanel>
                <TabPanel className="tab-container attendingEvents">
                    <br />
                    {this.createEventTemplate()}
                    <br />
                </TabPanel>
            </Tabs>
        </div>;
    }

    createEventTemplateEditable() {
        return <div className="eventContainer">
                        <span className="dateLabel">
                            30 Sep
                        </span>
            <span className="eventContent">
                            <div className="eventBanner">
                                <div className="eventDetails">
                                    <span className="eventName">
                                        CS3216
                                    </span>
                                    <span className="eventTime">
                                        <span className="clock-icon"></span>
                                        3:00-5:00
                                    </span>
                                    <span className="eventLocation">
                                        <span className="location-icon"></span>
                                        LT19
                                    </span>
                                </div>
                            </div>
                            <span className="edit-btn"></span>
            </span>
        </div>;
    }

    createEventTemplate() {
        return <div className="eventContainer">
                        <span className="dateLabel">
                            30 Sep
                        </span>
            <span className="eventContent">
                            <div className="eventBanner">
                                <div className="eventDetails">
                                    <span className="eventName">
                                        CS3216
                                    </span>
                                    <span className="eventTime">
                                        <span className="clock-icon"></span>
                                        3:00-5:00
                                    </span>
                                    <span className="eventLocation">
                                        <span className="location-icon"></span>
                                        LT19
                                    </span>
                                </div>
                            </div>
            </span>
        </div>;
    }
}

export default Schedule;