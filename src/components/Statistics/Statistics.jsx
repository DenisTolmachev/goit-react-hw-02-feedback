import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    return (
      <div className="Statistics">
        <p className="StatisticsValue">Good:</p>
        <p className="StatisticsValue">Neutral:</p>
        <p className="StatisticsValue">Bad:</p>
      </div>
    );
  }
}
