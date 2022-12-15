// libraries
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//style
import './_create-event.scss';
import { DefaultNavbar } from '../../../styled-components/navBar-styled-component';
import Navbar from '../../navbar/components/Navbar';
import { CreateEventBtn } from '../../../styled-components/buttons.js';

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

  // variable arrays for mapping
  const locations = [
    { name: 'location' },
    { name: 'Astra', _id: '639212e2dbe3d61449203b1a' },
    { name: 'Hole44', _id: '639213e77a0af7516f1781a4' },
    { name: 'KØPI', _id: '639214b0e5d487b63ccd0090' },
    { name: 'Panke Culture', _id: '63998e617678e8ba26337bbe' },
    { name: 'Schokoladen', _id: '639215d19adf831e2fa8f7b2' },
    { name: 'Supamolly', _id: '6392167b9adf831e2fa8f7b4' },
    { name: 'Urban Spree', _id: '639217189adf831e2fa8f7b6' },
    { name: '8MM', _id: '639217bc9adf831e2fa8f7b8' },
  ];

  const genres = [
    'genre',
    'Acoustic',
    'Afrobeat',
    'Alternative',
    'Electronic',
    'Experimental',
    'Folk',
    'Hardcore',
    'Hip-Hop',
    'Indie',
    'Krautrock',
    'Metal',
    'Rock',
    'Pop',
    'Post-Punk',
    'Psychedelic',
    'Punk',
    'Rap',
    'Shoegaze',
    'Singer Songwriter',
    'Stoner',
    'Trap',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await axios.post(`http:///api/events/create`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setError('');
      navigate(`/eventpage/${response.data.id}`);
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <>
      <DefaultNavbar noSearchBar>
        <Navbar />
      </DefaultNavbar>

      <div className="create-event">
        <form className="myForm" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="band-name">
              <input
                id="band-name"
                onChange={(e) => setBandName(e.target.value)}
                type="text"
                value={bandName}
                placeholder="band name"
                name="bandName"
              />
            </label>

            <label htmlFor="event-name">
              <input
                id="event-name"
                onChange={(e) => setEventName(e.target.value)}
                type="text"
                value={eventName}
                placeholder="event name"
                name="eventName"
              />
            </label>

            <label htmlFor="pre-sale-price">
              <input
                id="pre-sale-price"
                onChange={(e) => setPreSalePrice(e.target.value)}
                type="number"
                value={preSalePrice}
                placeholder="pre-sale price"
                name="preSalePrice"
              />
            </label>

            <label htmlFor="door-price">
              <input
                id="door-price"
                onChange={(e) => setDoorPrice(e.target.value)}
                type="number"
                value={doorPrice}
                placeholder="door price"
                name="doorPrice"
              />
            </label>

            <label htmlFor="ticket-url">
              <input
                id="ticket-url"
                onChange={(e) => setTicketUrl(e.target.value)}
                type="url"
                value={ticketURL}
                placeholder="ticket url"
                name="ticketURL"
              />
            </label>
          </div>

          <div className="container">
            <label htmlFor="event-url">
              <input
                id="event-url"
                onChange={(e) => setEventUrl(e.target.value)}
                type="url"
                value={eventURL}
                placeholder="event url"
                name="eventURL"
              />
            </label>

            <label htmlFor="band-url">
              <input
                id="band-url"
                onChange={(e) => setBandUrl(e.target.value)}
                type="url"
                value={bandURL}
                placeholder="band url"
                name="bandURL"
              />
            </label>

            <label htmlFor="genre">
              <select
                id="genre"
                onChange={(e) => setGenre(e.target.value)}
                type="text"
                value={genre}
                name="genre"
              >
                {genres.map((genre) => (
                  <option>{genre}</option>
                ))}
              </select>
            </label>

            <label htmlFor="date">
              <input
                id="date"
                onChange={(e) => setDate(e.target.value)}
                type="date"
                value={date}
                placeholder="date"
                name="date"
              />
            </label>

            <label htmlFor="location">
              <select
                id="location"
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                value={location}
                name="location"
              >
                {locations.map((location) => (
                  <option value={location._id}>{location.name}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="container">
            <label className="label-start" htmlFor="start-time">
              start time
            </label>
            <input
              id="start-time"
              onChange={(e) => setStartTime(e.target.value)}
              type="time"
              value={startTime}
              placeholder="start time"
              name="startTime"
            />

            <label className="label-doors" htmlFor="doors-open">
              doors open
            </label>
            <input
              id="doors-open"
              onChange={(e) => setDoorsOpen(e.target.value)}
              type="time"
              value={doorsOpen}
              placeholder="doors open"
              name="doorsOpen"
            />

            <label htmlFor="description">
              <textarea
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                maxlength="500"
                value={description}
                placeholder="description"
                name="description"
              />
            </label>
          </div>

          <div className="upload-file">
            <label htmlFor="image"> Select image for upload </label>
            <input
              id="upload-image"
              type="file"
              accept=".jpg,.png,.jpeg"
              name="image"
            />
          </div>
          <div className="button-create-event">
            <CreateEventBtn className="button-create" type="submit">
              Create Event
            </CreateEventBtn>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateEvent;
