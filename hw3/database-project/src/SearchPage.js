import "./App.css";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import SearchBox from "./components/searchBox";
import React, { Component } from 'react';
import FlightOption from "./components/flightOption";
import queryHandler from "./components/queryHandler";

class SearchPage extends Component {
  constructor (props) {
      super (props); // change to props on recieving actual data
      this.state = {
          flightID: ['1234','2345','3456','4567'],
          departCode: ['HTX', 'DFW', 'OH', 'CA'],
          departTime: ['6:00', '8:00', '13:00', '14:00'],
          arriveCode: ['FL', 'NY', 'LA', 'SA'],
          arriveTime: ['8:00', '10:00', '16:00', '18:00']
      }
      this.onSelectFlight = this.onSelectFlight.bind(this);
  }

  onSelectFlight(data) {
    const qType = "seats"
    queryHandler(qType, data);
    this.props.history.push('/seats');
  }

  render () {
    return (
        <div>
          <SearchBox />
          {this.state.flightID.map((flightID, flightIndex) => {
            return (<FlightOption
            flightID={flightID}
            departCode={this.state.departCode[flightIndex]}
            departTime={this.state.departTime[flightIndex]}
            arriveCode={this.state.arriveCode[flightIndex]}
            arriveTime={this.state.arriveTime[flightIndex]}
            onSelectFlight={this.onSelectFlight} />
          )
        })}
        </div>
    );
} }

export default withRouter(SearchPage);