// libraries
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

import Leaflet from 'leaflet';

import musicIcon from './../assets/musicIcon.svg';

// style
import './_map-dashboard.scss';
import 'leaflet/dist/leaflet.css'; // leaflet library for interactive maps

export default function MapDashboard() {
  const center = {
    lat: 52.520008,
    lng: 13.404954,
  };

  const [position, setPosition] = useState(center);

  const markerRef = useRef(null);
  const astra = [52.538241, 13.428635];
  const hole44 = [52.46436, 13.43328];
  const kopi = [52.50798, 13.4263];
  const schokoladen = [52.529812, 13.39712];
  const supamolly = [52.51065, 13.47151];
  const urbanSpree = [52.508141, 13.45182];
  const eightMM = [52.53121, 13.41156];

  const getIcon = new Leaflet.Icon({
    iconUrl: musicIcon,
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://stamen-maps.a.ssl.fastly.net/js/tile.stamen.js?v1.3.0';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // handle icon
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  return (
    <section className="map-dashboard">
      <h1>Venues</h1>
      <div id="map">
        <MapContainer
          style={{
            height: 500,
            width: 1000,
            marginLeft: '20%',
            marginBottom: '7%',
          }}
          center={position}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
          />
          <Marker
            icon={getIcon}
            position={position}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
              Berlin <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={astra}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
              Astra Kulturhaus Berlin
              <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={hole44}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
              Hole⁴⁴
              <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={kopi}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
              Köpi <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={schokoladen}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
              Schokoladen <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={supamolly}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
              Supamolly <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={urbanSpree}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
              Urban Spree <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={eightMM}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
              8MM <br />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}