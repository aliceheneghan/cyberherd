// libraries
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// style
import './_create-venue.scss';

function CreateVenue() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [venueType, setVenueType] = useState('');
  const [venueURL, setVenueUrl] = useState('');
  const [venueRating, setVenueRating] = useState('');
  const [priceRating, setPriceRating] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await axios.post(`http://localhost:4000/api/venues/create`,
        {name: formData.get('name'),
        address: formData.get('address'),
        neighborhood: formData.get('neighborhood'),
        venueType: formData.get('venueType'),
        venueURL: formData.get('venueUrl'),
        venueRating: formData.get('venueRating'),
        priceRating: formData.get('priceRating'),
    });
      setError('');
      navigate('/');
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div className="create-venue">
      <form onSubmit={handleSubmit}>
        <label for="venue-name">
          <input
            id="venue-name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="venue name"
            name="venueName"
          />
        </label>

        <label for="address">
          <input
            id="address"
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            value={address}
            placeholder="address"
            name="address"
          />
        </label>

        <label for="neighborhood">
          <input
            id="neighborhood"
            onChange={(e) => setNeighborhood(e.target.value)}
            type="text"
            value={neighborhood}
            placeholder="neighborhood"
            name="neighborhood"
          />
        </label>

        <label for="venue-type">
          <input
            id="venue-type"
            onChange={(e) => setVenueType(e.target.value)}
            type="text"
            value={venueType}
            placeholder="venue type"
            name="venueType"
          />
        </label>

        <label for="venue-url">
          <input
            id="venue-url"
            onChange={(e) => setVenueUrl(e.target.value)}
            type="url"
            value={venueURL}
            placeholder="venue url"
            name="venueUrl"
          />
        </label>

        <label for="venue-rating">
          <input
            id="venue-rating"
            onChange={(e) => setVenueRating(e.target.value)}
            type="number"
            value={venueRating}
            placeholder="venue rating"
            name="venueRating"
          />
        </label>

        <label for="price-rating">
          <input
            id="price-rating"
            onChange={(e) => setPriceRating(e.target.value)}
            type="number"
            value={priceRating}
            placeholder="price rating"
            name="priceRating"
          />
        </label>

        <br />

        <button className="button-create-venue" type="submit">
          Create Venue
        </button>
      </form>
    </div>
  );
}

export default CreateVenue;