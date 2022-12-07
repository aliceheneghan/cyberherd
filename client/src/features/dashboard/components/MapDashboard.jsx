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

  const position2 = [52.538241, 13.428635];

  const position3 = [52.497249, 13.411503];

  const position4 = [52.510459, 13.354771];

  const position5 = [52.510459, 13.448217];

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
      <h1>Map</h1>
      <div id="map">
        <MapContainer
          style={{ height: 500, width: 1000, marginLeft: '20%', marginBottom: '7%' }}
          center={position}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
            Mark your favorite venues <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={position2}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
            Mark your favorite venues<br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={position3}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
            Mark your favorite venues <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={position4}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
            Mark your favorite venues <br />
            </Popup>
          </Marker>

          <Marker
            icon={getIcon}
            position={position5}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
            Mark your favorite venues <br />
            </Popup>
          </Marker>

        </MapContainer>
      </div>
    </section>
  );
}
