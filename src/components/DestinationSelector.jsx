function DestinationSelector({ tours, selected, onSelect }) {
  // Extract unique destination names from tours
  //const uniqueDestinations = ['All Destinations', ...new Set(tours.map(tour => tour.name))];
  const uniqueDestinations = ['All Destinations', ...new Set((tours || []).map(tour => tour.name))];

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="destination">Filter by Destination:</label>{" "}
      <select
        id="destination"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="destination-select"
      >
        {uniqueDestinations.map((destination) => (
          <option key={destination} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DestinationSelector;