import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import './styles/style.css'

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('App loaded');
    fetchTours();
  }, []);

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

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchTours} />;
  }

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

  return (
    <div className="container">
      <h1>Tour Gallery</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  )
}

export default App
