import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Auth from '../../../modules/Auth';


class Filters extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
    }


    render() {
        return (
            <div>
                <div className="genre sidebar-popularcategories col-md-12 pad0 col-sm-12">
                    <h4>CATEGORY</h4>
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


