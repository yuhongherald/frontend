import React, {PropTypes} from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import '../css/filter.css';
import FilterForm from "./FilterForm.jsx";

class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //activePage: this.props.activePage,
            isPaneOpen: false,
        }
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    componentWillMount() {
    }


    render() {
        return (
            <div>
                {this.getSlidingPane()}
            </div>
        )
    }

    getSlidingPane() {
        return <div ref={ref => this.el = ref}>
            <button className = "btn" onClick={() => this.setState({ isPaneOpen: true })}>Click me to open right pane!</button>
            <SlidingPane
                isOpen={ this.state.isPaneOpen }
                title='Search'
                from='right'
                // subtitle='Optional subtitle.'
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                } }>
                <FilterForm/>
                {/*{this.getForm()}*/}
            </SlidingPane>
        </div>;
    }

    getForm() {
        <div className="filter-panel">
            <div className="col-md-12 pad0 col-sm-12">
                <div id="custom-search-input">
                    <div className="input-group col-xs-12 col-sm-12 col-md-12 absolute width-80">
                        <input type="text" className="  search-query form-control"
                               placeholder="search for event"/>
                        <span className="input-group-btn">
                                <button className="btn btn-danger" type="button">
                                    <span className=" glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                    </div>
                </div>
                <h4 className="grey-text">ADVANCED OPTIONS</h4>
                <hr />
                <br />

                <h4>LOCATION</h4>
                <div>
                    <input className="search-query form-control input-field" id="date1" name="location" placeholder="enter postal code"
                           type="text">
                    </input>
                    <button className="location-btn"></button>
                </div>
                <br />
                <h4>TIME</h4>
                <div>
                        <span className="date-container">
                            <input className="search-query form-control input-field" id="start-date" name="start-date" placeholder="start date"
                                   type="text">
                            </input>
                            <button className="calendar-btn"></button>
                        </span>
                    <span className="date-container">
                            <input className="search-query form-control input-field" id="start-time" name="start-time" placeholder="start time"
                                   type="text">
                            </input>
                            <button className="clock-btn"></button>
                        </span>
                </div>
                <div>
                        <span className="date-container">
                            <input className="search-query form-control input-field" id="end-date" name="end-date" placeholder="end date"
                                   type="text">
                            </input>
                            <button className="calendar-btn"></button>
                        </span>
                    <span className="date-container">
                            <input className="search-query form-control input-field" id="end-time" name="end-time" placeholder="end time"
                                   type="text">
                            </input>
                            <button className="clock-btn"></button>
                        </span>
                </div>
            </div>
            <br />
            <div className="genre sidebar-popularcategories col-md-12 pad0 col-sm-12">
                <h4>TYPE</h4>
                <div className="col-md-12 popularcategories-item genre-type border-btm">
                    <h5><label>
                        <div className="custom-checkbox">
                            <input type="checkbox" className="list-5" name="list-5" id="list-5"
                                   value=""/> Food
                            <label htmlFor="list-5"></label>
                        </div>
                    </label>
                    </h5>
                </div>
                <div className="col-md-12 popularcategories-item genre-type border-btm">
                    <h5><label>
                        <div className="custom-checkbox">
                            <input type="checkbox" className="list-5" name="list-5" id="list-5"
                                   value=""/> Music
                            <label htmlFor="list-5"></label>
                        </div>
                    </label>
                    </h5>
                </div>
                <div className="col-md-12 popularcategories-item genre-type border-btm">
                    <h5><label>
                        <div className="custom-checkbox">
                            <input type="checkbox" className="list-6" name="list-6" id="list-6"
                                   value=""/> Art
                            <label htmlFor="list-6"></label>
                        </div>
                    </label>
                    </h5>
                </div>
            </div>
        </div>
    }
}


export default Filters;


