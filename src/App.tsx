import './App.css';
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
                <div className="name">Aneseh Khodkar</div> {/* Name inside the card */}
                <h1>Happy Birthday! 🎂🎉</h1>
                <p>
                    On your special day, may you be surrounded by joy, laughter, and everything that brings you happiness. 🎈
                    I wish you a year ahead filled with love, success, and exciting new adventures. 🌟
                    May each moment be a celebration of who you are and all the amazing things you’ll achieve. ✨
                    Enjoy every single second of this beautiful journey! 🌻
                </p>
            </div>
        </div>
    );
}

export default App;
