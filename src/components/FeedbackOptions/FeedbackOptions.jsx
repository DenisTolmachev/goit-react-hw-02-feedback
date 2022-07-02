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
