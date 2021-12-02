import "./App.css";
import React, { Component } from 'react';
import SeatOption from "./components/seatOption";

class SeatsPage extends Component {
  constructor (props) {
      super (props); // change to props on recieving actual data
      this.state = {
        ticketNum: ['6969', '0420', '3000'],
        fareCond: ['economy', 'economy', 'business'],
        amount: ['$180', '$160', '$250'],
        seatNum: ['C20', 'A12', 'B20'],
      }
      this.onSelectSeat = this.onSelectSeat.bind(this);
  }

  onSelectSeat(data) {
    this.props.history.push('/booking');
  }

  render () {
    return (
        <div>
          {this.state.ticketNum.map((ticketNum, ticketIndex) => {
            return (<SeatOption
            ticketNum={ticketNum}
            fareCond={this.state.fareCond[ticketIndex]}
            amount={this.state.amount[ticketIndex]}
            seatNum={this.state.seatNum[ticketIndex]}
            onSelectSeat={this.onSelectSeat} />
          )
        })}
        </div>
    );
} }

export default SeatsPage;