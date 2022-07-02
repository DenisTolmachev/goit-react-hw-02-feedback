export const Notifications = props => {
    const { message } = props;
    return (
        <div className="Notifications">
        <p>{message}</p>
        </div>
    );
};