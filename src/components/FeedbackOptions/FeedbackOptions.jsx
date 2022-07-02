import PropTypes from 'prop-types';

export const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div>
      {options.map(item => (
        <button type="button" key={item} value={item} onClick={onLeaveFeedback}>
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
