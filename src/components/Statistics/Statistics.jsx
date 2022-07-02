import PropTypes from 'prop-types';

export const Statistics = props => {
  const { good, neutral, bad, total, percentage } = props;

  return (
    <div className="Statistics">
      <p className="StatisticsValue">Good: {good}</p>
      <p className="StatisticsValue">Neutral: {neutral}</p>
      <p className="StatisticsValue">Bad: {bad}</p>
      <p className="StatisticsValue">Total: {total}</p>
      <p className="StatisticsValue">Average: {percentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
