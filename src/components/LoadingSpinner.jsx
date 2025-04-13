// LoadingSpinner component displays a loading animation and message
// Used while fetching tours data from the API
const LoadingSpinner = () => {
  return (
    // Container for loading spinner and message
    <div className="loading-container">
      {/* Animated loading spinner element */}
      <div className="loading-spinner"></div>
      {/* Loading message displayed below spinner */}
      <p>Loading amazing tours...</p>
    </div>
  );
};

export default LoadingSpinner;