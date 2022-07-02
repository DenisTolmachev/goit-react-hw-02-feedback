import PropTypes from 'prop-types';

export const Notifications = props => {
    const { message } = props;
    return (
        <div className="Notifications">
        <p>{message}</p>
        </div>
    );
};

Notifications.propTypes = {
    message: PropTypes.string.isRequired,
}