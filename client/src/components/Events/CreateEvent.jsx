import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Auth from '../../modules/Auth';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../Events/css/Events.css';



class CreateEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            location: ''
        }

    }

    componentWillMount() {

    }


    render(){
        const options = [
            { value: 'music', label: 'Music' },
            { value: 'art', label: 'Art' }
        ];
        const defaultOption = options[0];
        return(
            <div id="section-contactform">
                <div className="container">
                    <div className="col-md-12 text-center">
                        <h1>Create your own event</h1>
                    </div>
                    <form >
                        <div className="col-md-3 col-subject">
                            <div className="form-group">
                                <label className="control-label">TITLE
                                    <span>*</span>
                                </label>
                                <input type="text" className="form-control" id="formInput113" required/>
                            </div>
                        </div>
                        <div className="col-md-3 col-subject">
                            <div className="form-group">
                                <label className="control-label">LOCATION
                                    <span>*</span>
                                </label>
                                <input type="email" className="form-control" id="formInput113" required/>
                            </div>
                        </div>
                        <div className="col-md-3 col-phone">
                            <div className="form-group">
                                <label className="control-label">DATE
                                    <span>*</span>
                                </label>
                                <SingleDatePicker style={{display: 'block'}}
                                    date={this.state.date} // momentPropTypes.momentObj or null
                                    onDateChange={date => this.setState({date})} // PropTypes.func.isRequired
                                    focused={this.state.focused} // PropTypes.bool
                                    onFocusChange={({ focused }) => this.setState({focused})} // PropTypes.func.isRequired
                                    id="your_unique_id" // PropTypes.string.isRequired,
                                />
                            </div>
                        </div>

                        <div className="col-md-3 col-phone">
                            <div className="form-group">
                                <label className="control-label">CATEGORY
                                    <span>*</span>
                                </label>
                                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

                            </div>
                        </div>

                        <div className="col-md-12 col-message">
                            <div className="form-group">
                                <label className="control-label" >DESCRIPTION</label>
                                <textarea className="form-control" rows="10" id="formInput135"></textarea>
                            </div>
                            <button className="btn btn-warning pull-right btn-subscribe" type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default CreateEvent;