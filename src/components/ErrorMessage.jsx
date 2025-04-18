// ErrorMessage component displays an error message with a retry button
// Props:
// - message: The error message to display
// - onRetry: Callback function to handle retry attempts
const ErrorMessage = ({ message, onRetry }) => {
  return (
    // Container for the error message and retry button
    <div className="error-container">
      {/* Error icon */}
      <div className="error-icon">❌</div>
      {/* Error heading */}
      <h2>Oops! Something went wrong</h2>
      {/* Display the actual error message passed as prop */}
      <p className="error-message">{message}</p>
      {/* Retry button that calls onRetry callback when clicked */}
      <button className="btn btn-primary" onClick={onRetry}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;