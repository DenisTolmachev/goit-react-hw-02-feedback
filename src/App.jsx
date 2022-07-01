import { Component } from 'react';
import { FeedbackBtns } from './components/FeedbackBtns/FeedbackBtns';
import { Statistics } from './components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackBtns />
        <h2>Statistics</h2>
        <Statistics />
      </div>
    );
  }
}
