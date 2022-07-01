import React, { Component } from 'react';

export class FeedbackBtns extends Component {
  render() {
    return (
      <div className="FeedbackBtns">
        <button type='button' className="Feedback-btn">Good</button>
        <button type='button' className="Feedback-btn">Neutral</button>
        <button type='button' className="Feedback-btn">Bad</button>
      </div>
    );
  }
}
