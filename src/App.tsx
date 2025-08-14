import React from 'react';
import './App.css'; // Ensure App.css is imported

function App() {
    return (
        <div className="container">
            {/* Image for Moon Status */}
            <img
                src="/moon.png" // Ensure the image path is correct
                alt="Moon status on August 8, 1996"
                className="moon-image"
            />

            {/* Status Text Below the Moon */}
            <p className="moon-status-text">This image shows the moon's status on August 8, 1996.</p>

            {/* Birthday Message Box with Name */}
            <div className="card">
                <div className="name">Anseh Khodkar</div> {/* Name inside the card */}
                <h1>Happy Birthday!</h1>
                <p>
                    May your special day be filled with joy, laughter, and everything that makes you happy.
                    Wishing you a wonderful year ahead filled with love, success, and new adventures.
                    Enjoy every moment!
                </p>
            </div>
        </div>
    );
}

export default App;
