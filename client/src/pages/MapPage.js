import React from 'react';
import Chat from '../components/Chat';
import Map from '../components/Map';
import './App.css';

const MapPage = () => {
    return (
        <div className="map-page">
            <div className="chat-section">
                <Chat />
            </div>
            <div className="map-section">
                <Map />
            </div>
        </div>
    );
};

export default MapPage;
