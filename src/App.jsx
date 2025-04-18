// Import required dependencies
import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import DestinationSelector from './components/DestinationSelector'
import './styles/style.css'

function App() {
  // State management for tours data, loading state and error handling
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');

  // Fetch tours data when component mounts
  useEffect(() => {
    console.log('App loaded');
    fetchTours();
  }, []);

  // Async function to fetch tours data from API
  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours. Please check your internet connection and try again.');
      }
      const data = await response.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  // Filter tours based on selected destination
  const filteredTours = selectedDestination === 'All Destinations' 
    ? tours 
    : tours.filter(tour => tour.name === selectedDestination);

  // Show loading spinner while data is being fetched
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show error message if fetch fails
  if (error) {
    return <ErrorMessage message={error} onRetry={fetchTours} />;
  }

  // Show refresh button if all tours have been removed
  if (tours.length === 0) {
    return (
      <div className="refresh-container">
        <h2>No Tours Left</h2>
        <button className="btn btn-primary" onClick={fetchTours}>
          Refresh Tours
        </button>
      </div>
    );
  }

  // Render main tour gallery with destination selector
  return (
    <div className="container">
      <h1>Tour Gallery</h1>
      <DestinationSelector 
        tours={tours}
        selected={selectedDestination}
        onSelect={setSelectedDestination}
      />
      <Gallery tours={filteredTours} onRemove={removeTour} />
    </div>
  )
}

export default App
