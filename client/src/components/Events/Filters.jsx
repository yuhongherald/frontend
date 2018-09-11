import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Auth from '../../modules/Auth';
import './css/style.css';


class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: undefined,
            startDate: undefined,
            endDate: undefined,
            selectedCategories : [false, false, false, false]
        }
    }

    componentWillMount() {

    }


    render() {
        return (
            <div>
                <div className="sidebar-selectdate col-md-12 pad0 col-sm-12">
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

                    <h4>SELECT DATE</h4>
                    <div className="dates">
                        <input className="form-control date1" id="date1" name="date" placeholder="07/15/2016"
                               type="text">
                        </input>
                        <input className="form-control date2" id="date2" name="date" placeholder="07/15/2016"
                               type="text">
                        </input>
                    </div>
                </div>

                <div className="genre sidebar-popularcategories col-md-12 pad0 col-sm-12">
                    <h4>TYPE</h4>
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
        )
    }
}


export default Filters;


