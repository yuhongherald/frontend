import React, {Component} from 'react';
import {Link} from 'react-router';
import '../../Events/css/Events.css';
import Events from './Events.jsx';
import CategoryList from './CategoryList.jsx';
import 'react-dropdown/style.css';
import 'react-datez/dist/css/react-datez.css';
import EventsByPage from "../../Common/EventsByPage.jsx";
import Form from "./Form.jsx";

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gotFilters: false,
            filters: {
                location: 'Bedok',
                category: 'Choose an option',
                event_start_date: '',
                event_end_date: ''
            },
            startDate: new Date('09/12/2018'),
            endDate: new Date('9/20/2018')
        };
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
        this.formatDate = this.formatDate.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
        this.remapEventType = this.remapEventType.bind(this);
    }

    resetFilters() {
        this.setState({
            filters: {
                location: '',
                category: '',
                event_start_date: '',
                event_end_date: ''
            },
            gotFilters: false
        })
    }

    onChange(event) {
        event.preventDefault();
        const field = event.target.name;
        const filters = this.state.filters;
        filters[field] = event.target.filters;
        this.setState({
            filters: filters,
            gotFilters: true
        });
    }

    remapEventType(event){
        let mapList = {
            "arts": "0",
            "food": "1",
            "sports": "2",
            "social": "3"
        };
        if (event in mapList){
            return mapList[event];
        }
    }

    onSelect(e) {
        const filters = this.state.filters;
        filters['category'] = this.remapEventType(e.value);
        this.setState({
            filters: filters,
            gotFilters: true
        });
    }

    formatDate(date) {
        return new Date(date).toISOString().substr(0, 10);
    }

    changeStartDate(date) {
        const filters = this.state.filters;
        filters['event_start_date'] = this.formatDate(date) + " 00:00";
        this.setState({
            filters: filters,
            gotFilters: true,
            startDate: date
        });
    }

    changeEndDate(date) {
        const filters = this.state.filters;
        filters['event_end_date'] = this.formatDate(date) + " 00:00";
        this.setState({
            filters: filters,
            gotFilters: true,
            endDate: date
        });
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    componentDidUpdate() {

    }


    render() {

        const options = [
            {value: 'none', label: 'Choose an option'},
            {value: 'arts', label: 'Arts'},
            {value: 'food', label: 'Food'},
            {value: 'sports', label: 'Sports'},
            {value: 'social', label: 'Social'}
        ];


        return (
            <div>
                <div className="_obpazuf" data-veloute="landing_page_header">
                    <div>
                        <div className="_nplrdyu">
                            <div className="_5rbuw4">
                                <div className="_1yd927w"></div>
                                <div className="_2o6ibk"><img className="_154ar5hp" id="marqueeImage"
                                                              alt="Book unique <a href='/sitemaps/v2' >homes</a> and experiences."
                                                              sizes="100vw"
                                                              src="https://cigaguides.thinknewr.com/wp-content/uploads/sites/2/2018/06/Event-Blogging-Strategies.jpg"
                                                              height="300px"
                                                              srcSet="">
                                </img>
                                </div>
                                <div className="_1m05dcv"></div>
                            </div>
                            <div className="_dakdiq">
                                <div className="_djxl322">
                                    <div className="_ni9axhe">
                                        <div className="_ovebx1" style={{backgroundColor: 'transparent'}}>
                                            <div className="_14pemr6">
                                                <div className="_iv990q">
                                                    <h1 className="_tpbrp">
                                                        <div>
                                                            <Link to="/events" style={{color: 'white'}}>Explore
                                                                events <i className="fas fa-chevron-circle-right"
                                                                          style={{
                                                                              fontSize: '0.7em',
                                                                              padding: '5px 5px 5px 5px'
                                                                          }}></i></Link>
                                                        </div>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Form onClick={this.resetFilters} onChange={this.onChange} filters={this.state.filters}
                              handleChange={this.changeStartDate} value={this.state.startDate}
                              handleChange1={this.changeEndDate} value1={this.state.endDate} options={options}
                              onChange1={this.onSelect}/>
                        <span style={{fontSize: '0'}}></span></div>
                </div>

                {
                    !this.state.gotFilters ? (
                        <div>
                            <CategoryList/>
                            <Events/>
                        </div>
                    ) : (
                        <div style={{padding: '0px 20px 0px 20px'}}>
                            <h4 style={{fontWeight: 'bold', marginBottom: '20px'}}>Results by
                                filters</h4>
                            <EventsByPage activePage={this.state.activePage}
                                          eventLimit="null"
                                          pagination={true}
                                          filters={this.state.filters}
                                          sortBy={'event_start_date'}
                            />
                        </div>

                    )
                }


            </div>
        )
    }

}

export default Index;


