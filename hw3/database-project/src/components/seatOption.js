import React, { Component } from 'react';
import queryHandler from './queryHandler';

class SeatOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketNum: this.props.ticketNum,
      fareCond: this.props.fareCond,
      amount: this.props.amount,
      seatNum: this.props.seatNum,
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
        <h1 className="ticketNum"> Ticket Number: {this.state.ticketNum}</h1>
        <h3 className="fareCond"> Conditions: {this.state.fareCond}</h3>
        <h3 className="amount"> Cost: {this.state.amount}</h3>
        <h3 className="seatNum"> Seat Number: {this.state.seatNum}</h3>

        <button 
          type="button" 
          class="btn-primary m-1"
          onClick={() => this.props.onSelectSeat(this.state)}
        >
          Select Seat
        </button>
      </div>
    );
  }
}
 
export default SeatOption;