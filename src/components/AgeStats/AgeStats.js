import React, { Component } from 'react';

class AgeStats extends Component {
  timeSince (date) {
    let today = new Date().getTime();
    let otherDate = new Date(date).getTime();
    let difference = Math.abs(today - otherDate);

    return `difference in miliseconds: ${difference}.`
  }

  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        <h4>congrats on {this.timeSince(this.props.date)}</h4>
      </div>
    )
  }
}

export default AgeStats;

