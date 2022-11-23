// libraries
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//style
import './_create-event.scss';

function CreateEvent() {
  const [bandName, setBandName] = useState('');
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [doorsOpen, setDoorsOpen] = useState('');
  const [location, setLocation] = useState('');
  const [preSalePrice, setPreSalePrice] = useState('');
  const [doorPrice, setDoorPrice] = useState('');
  const [ticketURL, setTicketUrl] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [eventURL, setEventUrl] = useState('');
  const [bandURL, setBandUrl] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
     const response = await axios.post(`http://localhost:4000/api/events/create`, formData,
        { headers: {"Content-Type": "multipart/form-data"}
    });
      setError('');
      navigate(`/eventpage/${response.data.id}`);
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <div className="create-event">
      <form onSubmit={handleSubmit}>
        <label for="band-name">
          <input
            id="band-name"
            onChange={(e) => setBandName(e.target.value)}
            type="text"
            value={bandName}
            placeholder="band name"
            name="bandName"
          />
        </label>

        <label for="event-name">
          <input
            id="event-name"
            onChange={(e) => setEventName(e.target.value)}
            type="text"
            value={eventName}
            placeholder="event name"
            name="eventName"
          />
        </label>

        <label for="date">
          <input
            id="date"
            onChange={(e) => setDate(e.target.value)}
            type="date"
            value={date}
            placeholder="date"
            name="date"
          />
        </label>

        <label for="start-time">
          <input
            id="start-time"
            onChange={(e) => setStartTime(e.target.value)}
            type="time"
            value={startTime}
            placeholder="start time"
            name="startTime"
          />
        </label>

        <label for="doors-open">
          <input
            id="doors-open"
            onChange={(e) => setDoorsOpen(e.target.value)}
            type="time"
            value={doorsOpen}
            placeholder="doors open"
            name="doorsOpen"
          />
        </label>

        <label for="location">
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            value={location}
            placeholder="location"
            name="location"
          />
        </label>

        <label for="pre-sale-price">
          <input
            id="pre-sale-price"
            onChange={(e) => setPreSalePrice(e.target.value)}
            type="number"
            value={preSalePrice}
            placeholder="pre-sale price"
            name="preSalePrice"
          />
        </label>

        <label for="door-price">
          <input
            id="door-price"
            onChange={(e) => setDoorPrice(e.target.value)}
            type="number"
            value={doorPrice}
            placeholder="door price"
            name="doorPrice"
          />
        </label>

        <label for="ticket-url">
          <input
            id="ticket-url"
            onChange={(e) => setTicketUrl(e.target.value)}
            type="url"
            value={ticketURL}
            placeholder="ticket url"
            name="ticketURL"
          />
        </label>

        <label for="genre">
          <input
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
            type="text"
            value={genre}
            placeholder="genre"
            name="genre"
          />
        </label>

        <label for="description">
          <input
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={description}
            placeholder="description"
            name="description"
          />
        </label>

        <label for="event-url">
          <input
            id="event-url"
            onChange={(e) => setEventUrl(e.target.value)}
            type="url"
            value={eventURL}
            placeholder="event url"
            name="eventURL"
          />
        </label>

        <label for="band-url">
          <input
            id="band-url"
            onChange={(e) => setBandUrl(e.target.value)}
            type="url"
            value={bandURL}
            placeholder="band url"
            name="bandURL"
          />
        </label>

        <label for="image">
          <input type="file" accept=".jpg,.png,.jpeg" name="image" />
        </label>

        <br />

        <button className="button-create-event" type="submit">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
