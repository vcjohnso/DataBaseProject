import React, { Component } from 'react';
import queryHandler from './queryHandler';

class FlightOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightID: this.props.flightID,
      departCode: this.props.departCode,
      arriveCode: this.props.departTime,
      departTime: this.props.arriveCode,
      arriveTime: this.props.arriveTime,
    }
  }

  render() { 
    return (
      <div
        style={{
          padding:"1rem 1rem 1rem",
          border: "double #f7f7f9",
          backgroundColor: "rgb(220, 220, 220, 0.5)",
          boxSizing: "content-box",
          }}
        >
        <h1 className="flightID"> Flight: {this.state.flightID}</h1>
        <h3 className="departCode"> Departing: {this.state.departCode}</h3>
        <h3 className="departTime"> Depart Time: {this.state.departTime}</h3>
        <h3 className="arriveCode"> Arriving: {this.state.arriveCode}</h3>
        <h3 className="departCode"> Arrive Time: {this.state.arriveTime}</h3>

        <button 
          type="button" 
          class="btn-primary m-1"
          onClick={() => this.props.onSelectFlight(this.state)}
        >
          Select Flight
        </button>
      </div>
    );
  }
}
 
export default FlightOption;