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

  // array of locations
  const locations = [
    'please select your location',
    'Ausland',
    'Berghain',
    'SO35',
    'Schokoladen',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await axios.post(
        `http://localhost:4000/api/events/create`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
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
          <div className="container-one">
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
              <input
                id="genre"
                onChange={(e) => setGenre(e.target.value)}
                type="text"
                value={genre}
                placeholder="genre"
                name="genre"
              />
            </label>
          </div>

          <div className="container-two">
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
                  <option>{location}</option>
                ))}
              </select>
            </label>

            <label htmlFor="start-time">
              <input
                id="start-time"
                onChange={(e) => setStartTime(e.target.value)}
                type="time"
                value={startTime}
                placeholder="start time"
                name="startTime"
              />
            </label>

            <label htmlFor="doors-open">
              <input
                id="doors-open"
                onChange={(e) => setDoorsOpen(e.target.value)}
                type="time"
                value={doorsOpen}
                placeholder="doors open"
                name="doorsOpen"
              />
            </label>

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
            <select id="location"
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              value={location}
              name="location">
              {locations.map((location) => (
                <option>{location}</option>
              ))}
            </select>
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

          <label htmlFor="genre">
            <input
              id="genre"
              onChange={(e) => setGenre(e.target.value)}
              type="text"
              value={genre}
              placeholder="genre"
              name="genre"
            />
          </label>

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

          <label htmlFor="start-time">
            <input
              id="start-time"
              onChange={(e) => setStartTime(e.target.value)}
              type="time"
              value={startTime}
              placeholder="start time"
              name="startTime"
            />
          </label>

           <label htmlFor="doors-open">
            <input
              id="doors-open"
              onChange={(e) => setDoorsOpen(e.target.value)}
              type="time"
              value={doorsOpen}
              placeholder="doors open"
              name="doorsOpen"
            />
          </label> 
          
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

          <div className="upload-file">
            <label htmlFor="image"> Select image for upload </label>
            <input
              id="upload-image"
              type="file"
              accept=".jpg,.png,.jpeg"
              name="image"
            />
          </div>

          <CreateEventBtn className="button-create" type="submit">
            Create Event
          </CreateEventBtn>
        </form>
      </div>
    </>
  );
}

export default CreateEvent;
