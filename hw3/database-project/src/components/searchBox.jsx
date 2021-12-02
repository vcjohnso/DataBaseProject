import React, { Component } from 'react';
import queryHandler from './queryHandler';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      departing: "",
      arriving: ""
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    const qType = "search"
    queryHandler(qType, this.state);
    window.location.reload(false);
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
        <h2 className="m-2">Search For Your Next Flight!</h2>
        <input 
          name= "departing" 
          type="text" 
          class="m-2" 
          placeholder="Departure City"
          value={this.state.departing}
          onChange={this.onInputChange}
        />
        <input
          name="arriving" 
          type="text" 
          class="m-2" 
          placeholder="Arrival City"
          value={this.state.arriving}
          onChange={this.onInputChange}
        />
        <button 
          type="button" 
          class="btn-primary m-1"
          onClick={this.onSubmitForm}
        >
          Search
        </button>
      </div>
    );
  }
}
 
export default SearchBox;