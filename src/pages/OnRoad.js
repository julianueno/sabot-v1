import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import './OnRoad.css'

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam51ZW4wMDEiLCJhIjoiY2wxbWEzam0wMGFzbjNicGQ0YWQ4aDI4NiJ9.fB_7iHlM1LrHqOdDD-TMXA";

export default function App() {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (ref.current && !map) {
      const map = new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-0.24, 51.52],
        zoom: 9
      });
      setMap(map);
    }
  }, [ref, map]);
  return <div className="map-container" ref={ref} />;
}
