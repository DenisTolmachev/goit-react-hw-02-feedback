import { Component } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    return values.map(item => (total += item), total).reverse()[0];
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleClick = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
      </div>
    );
  }
}
