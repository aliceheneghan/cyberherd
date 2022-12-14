// libraries
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// style
import './_create-venue.scss';

function CreateVenue() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [venueType, setVenueType] = useState('');
  const [venueURL, setVenueUrl] = useState('');
  const [venueRating, setVenueRating] = useState('');
  const [priceRating, setPriceRating] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const neighborhoods = [
    'Charlottenburg',
    'Friedrichshain',
    'Hellersdorf',
    'Köpenick',
    'Kreuzberg',
    'Lichtenberg',
    'Marzahn',
    'Mitte',
    'Neukölln',
    'Pankow',
    'Prenzlauer Berg',
    'Reinickendorf',
    'Schöneberg',
    'Schöneweide',
    'Spandau',
    'Steglitz',
    'Tempelhof',
    'Treptow',
    'Wedding',
    'Zehlendorf',
  ];

  const venueTypes = ['Bar', 'Café', 'Club', 'Concert Hall', 'Cultural Center'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      const response = await axios.post(`/api/venues/create`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setError('');
      navigate(`/venuepage/${response.data.id}`);
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
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
            name="name"
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

        <label for="latitude">
          <input
            id="latitude"
            onChange={(e) => setLatitude(e.target.value)}
            type="number"
            value={latitude}
            placeholder="latitude"
            name="latitude"
          />
        </label>

        <label for="longitude">
          <input
            id="longitude"
            onChange={(e) => setLongitude(e.target.value)}
            type="number"
            value={longitude}
            placeholder="longitude"
            name="longitude"
          />
        </label>

        <label for="neighborhood">
          <select
            id="neighborhood"
            onChange={(e) => setNeighborhood(e.target.value)}
            type="text"
            value={neighborhood}
            name="neighborhood"
          >
            {neighborhoods.map((neighborhood) => (
              <option>{neighborhood}</option>
            ))}
          </select>
        </label>

        <label for="venue-type">
          <select
            id="venue-type"
            onChange={(e) => setVenueType(e.target.value)}
            type="text"
            value={venueType}
            name="venueType"
          >
            {venueTypes.map((type) => (
              <option>{type}</option>
            ))}
          </select>
        </label>

        <label for="venue-url">
          <input
            id="venue-url"
            onChange={(e) => setVenueUrl(e.target.value)}
            type="url"
            value={venueURL}
            placeholder="venue url"
            name="venueURL"
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

        <label for="image">
          <input type="file" accept=".jpg,.png,.jpeg" name="image" />
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
