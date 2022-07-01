import {FeedbackBtns} from './components/FeedbackBtns/FeedbackBtns';
import {Statistics } from './components/Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <FeedbackBtns />
      <h2>Statistics</h2>
      <Statistics />
    </div>
  );
};