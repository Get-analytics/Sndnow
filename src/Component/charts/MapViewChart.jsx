// File: MapViewChart.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlobeIcon, ListFilter, BarChart3, MapPin } from "lucide-react";
import "./MapViewChart.css";

const sampleData = [
  { name: "United States", lat: 37.0902, lng: -95.7129, visitors: 3200, percentage: 40 },
  { name: "India", lat: 20.5937, lng: 78.9629, visitors: 2500, percentage: 31.25 },
  { name: "Germany", lat: 51.1657, lng: 10.4515, visitors: 800, percentage: 10 },
  { name: "Brazil", lat: -14.235, lng: -51.9253, visitors: 600, percentage: 7.5 },
  { name: "Japan", lat: 36.2048, lng: 138.2529, visitors: 400, percentage: 5 },
  { name: "South Africa", lat: -30.5595, lng: 22.9375, visitors: 200, percentage: 2.5 },
];

function MapViewChart({ data = sampleData, inView = true, width = 800, height = 400 }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [viewMode, setViewMode] = useState("map");

  const maxVisitors = Math.max(...data.map(loc => loc.visitors));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const pointVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", duration: 0.4 } }
  };

  function getMarkerSize(visitors) {
    const min = 6, max = 24;
    return min + (visitors / maxVisitors) * (max - min);
  }

  function convertLatLng(lat, lng) {
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    return { x, y };
  }

  return (
    <div className="mvc-container">
      <div className="mvc-controls">
        <div className="mvc-tabs">
          <button
            className={viewMode === 'map' ? 'mvc-tab-active' : 'mvc-tab'}
            onClick={() => setViewMode('map')}
          >Map View</button>
          <button
            className={viewMode === 'list' ? 'mvc-tab-active' : 'mvc-tab'}
            onClick={() => setViewMode('list')}
          >List View</button>
        </div>
        <div className="mvc-toolbar">
          <button className="mvc-tool"><ListFilter /></button>
          <button className="mvc-tool"><BarChart3 /></button>
        </div>
      </div>

      {viewMode === 'map' && (
        <motion.div
          className="mvc-map-wrapper"
          style={{ height: `${height}px` }}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.svg
            className="mvc-map-svg"
            viewBox="0 0 1000 500"
            variants={mapVariants}
          >
            {/* Base map can be added here using a <path> or image */}
            {data.map((loc, i) => {
              const { x, y } = convertLatLng(loc.lat, loc.lng);
              const size = getMarkerSize(loc.visitors);
              return (
                <motion.g
                  key={i}
                  variants={pointVariants}
                  onMouseEnter={() => setSelectedLocation(loc)}
                  onMouseLeave={() => setSelectedLocation(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle cx={`${x}%`} cy={`${y}%`} r={size} className="mvc-marker outer" />
                  <circle cx={`${x}%`} cy={`${y}%`} r={size/2} className="mvc-marker inner" />
                </motion.g>
              );
            })}
            {selectedLocation && (() => {
              const { x, y } = convertLatLng(selectedLocation.lat, selectedLocation.lng);
              return (
                <g>
                  <rect x={`${x+1}%`} y={`${y-10}%`} width="120" height="60" className="mvc-tooltip-bg" />
                  <text x={`${x+3}%`} y={`${y-5}%`} className="mvc-tooltip-title">{selectedLocation.name}</text>
                  <text x={`${x+3}%`} y={`${y}%`} className="mvc-tooltip-text">Visitors: {selectedLocation.visitors}</text>
                  <text x={`${x+3}%`} y={`${y+5}%`} className="mvc-tooltip-text">{selectedLocation.percentage}% total</text>
                </g>
              );
            })()}
          </motion.svg>
          <div className="mvc-map-buttons">
            <button className="mvc-zoom-btn mvc-zoom-in">+</button>
            <button className="mvc-zoom-btn mvc-zoom-out">–</button>
          </div>
        </motion.div>
      )}

      {viewMode === 'list' && (
        <motion.div
          className="mvc-list-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="mvc-list-header">
            <div>Country</div><div>Visitors</div><div>% Total</div><div>Session</div>
          </div>
          <div className="mvc-list-items">
            {data.sort((a,b)=>b.visitors-a.visitors).map((loc,i)=>(
              <motion.div key={i} className={i%2===0?'mvc-list-item even':'mvc-list-item odd'} variants={containerVariants}>
                <div>{loc.name}</div>
                <div>{loc.visitors.toLocaleString()}</div>
                <div>{loc.percentage}%</div>
                <div>3m 42s</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="mvc-summary">
        <div className="mvc-summary-card">Total Countries: {data.length}</div>
        <div className="mvc-summary-card">Top Location: United States</div>
        <div className="mvc-summary-card">New Regions: +3 (↑12%)</div>
      </div>
    </div>
  );
}

export default MapViewChart;
