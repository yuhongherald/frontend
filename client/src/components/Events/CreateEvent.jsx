import React, {PropTypes} from 'react';
import Auth from '../../modules/Auth';
import {ReactDatez} from 'react-datez';
import 'react-datez/dist/css/react-datez.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../Events/css/Events.css';
import TextField from '@material-ui/core/TextField';


class CreateEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                title: '',
                location: '',
                description: '',
                category: '',
                maxQuota: '',
                startTime: '10:00',
                endTime: '10:00'
            }
        }
        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.changeEndTime = this.changeEndTime.bind(this);
        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
    }

    onSelect(e) {
        const data = this.state.data;
        data['category'] = e.value;
        this.setState({
            data: data
        });

    }

    onChange(event) {
        event.preventDefault();
        const field = event.target.name;
        const data = this.state.data;
        data[field] = event.target.value;
        this.setState({
            data: data
        });
    }

    changeStartTime(time) {
        this.setState({startTime: time})
    }

    changeEndTime(time) {
        this.setState({endTime: time})
    }

    changeStartDate(date) {
        this.setState({startDate: date})

    }

    changeEndDate(date) {
        this.setState({endDate: date})

    }

    handleClick() {
        let postData = {
            "event_title": this.state.data.title,
            "event_desc": this.state.data.description,
            "max_quota": this.state.data.maxQuota,
            "event_type": this.state.data.category,
            "event_start_date": this.state.startDate,
            "event_end_date": this.state.endDate,
            "event_start_time": this.state.data.startTime,
            "event_end_time": this.state.data.endTime,
            "is_open_ended": true,
            "location": this.state.data.location
        }
        console.log(postData);
    }

    componentWillMount() {

    }


    render() {
        const options = [
            {value: 'music', label: 'Music'},
            {value: 'art', label: 'Art'}
        ];
        const defaultOption = options[0];
        return (
            <div id="section-contactform">
                <div className="container">
                    <div className="col-md-12 text-center">
                        <h1>Create your own event</h1>
                    </div>
                    <form>
                        <div className="col-md-3 col-subject">
                            <div className="form-group">
                                <label className="control-label">TITLE
                                    <span>*</span>
                                </label>
                                <input type="text" className="form-control" id="formInput113" name="title"
                                       onChange={this.onChange}
                                       value={this.state.data.title} required/>
                            </div>
                        </div>
                        <div className="col-md-3 col-subject">
                            <div className="form-group">
                                <label className="control-label">LOCATION
                                    <span>*</span>
                                </label>
                                <input type="email" className="form-control" id="formInput113" name="location"
                                       onChange={this.onChange}
                                       value={this.state.data.location} required/>
                            </div>
                        </div>
                        <div className="col-md-3 col-phone">
                            <div className="form-group">
                                <label className="control-label">CATEGORY
                                    <span>*</span>
                                </label>
                                <Dropdown options={options} onChange={this.onSelect} value={defaultOption}
                                          placeholder="Select an option"/>

                            </div>
                        </div>
                        <div className="col-md-3 col-subject">
                            <div className="form-group">
                                <label className="control-label">NUMBER OF PARTICIPANTS
                                    <span>*</span>
                                </label>
                                <input type="email" className="form-control" id="formInput113" name="maxQuota"
                                       onChange={this.onChange}
                                       value={this.state.data.maxQuota} required/>
                            </div>
                        </div>
                        <div className="col-md-3 col-phone">
                            <div className="form-group">
                                <label className="control-label">START DATE
                                    <span>*</span>
                                </label>
                                <ReactDatez name="dateInput" handleChange={this.changeStartDate}
                                            value={this.state.startDate}/>
                            </div>
                        </div>

                        <div className="col-md-3 col-phone">
                            <div className="form-group">
                                <label className="control-label">START TIME
                                </label>
                                <TextField
                                    id="time"
                                    type="time"
                                    defaultValue="07:30"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                    name="startTime"
                                    onChange={this.onChange}
                                    value={this.state.data.startTime}
                                />
                            </div>
                        </div>

                        <div className="col-md-3 col-phone">
                            <div className="form-group">
                                <label className="control-label">END DATE
                                </label>
                                <ReactDatez name="dateInput" handleChange={this.changeEndDate}
                                            value={this.state.endDate}/>
                            </div>
                        </div>


                        <div className="col-md-3 col-phone">
                            <div className="form-group">
                                <label className="control-label">END TIME
                                </label>
                                <TextField
                                    id="time"
                                    type="time"
                                    defaultValue="07:30"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                    name="endTime"
                                    onChange={this.onChange}
                                    value={this.state.data.endTime}
                                />
                            </div>
                        </div>



                        <div className="col-md-12 col-message">
                            <div className="form-group">
                                <label className="control-label">DESCRIPTION</label>
                                <textarea className="form-control" rows="10" id="formInput135" name="description"
                                          onChange={this.onChange}
                                          value={this.state.data.description}></textarea>
                            </div>
                            <button className="btn btn-warning pull-right btn-subscribe" type="submit"
                                    onClick={this.handleClick}>CREATE EVENT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default CreateEvent;