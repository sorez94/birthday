import './App.css';
import backgroundImg from './bg.jpg'; // From src folder

function App() {
    return (
        <div className="app-wrapper">
            {/* Blurred Background */}
            <div
                className="background-blur"
                style={{
                    backgroundImage: `url(${backgroundImg})`
                }}
            ></div>

            {/* Foreground Content */}
            <div className="container">
                {/* Moon Image */}
                <img
                    src="/moon.png"
                    alt="Moon status on August 7, 1996"
                    className="moon-image"
                />

                {/* Status text */}
                <p className="moon-status-text">
                    This image shows the moon's status on August 7, 1996.
                </p>

                {/* Card */}
                <div className="card">
                    <div className="name">Aneseh Khodkar</div>
                    <h1>Happy Birthday! 🎂🎉</h1>
                    <p>
                        On your special day, may you be surrounded by joy, laughter, and everything that brings you happiness. 🎈
                        I wish you a year ahead filled with love, success, and exciting new adventures. 🌟
                        May each moment be a celebration of who you are and all the amazing things you’ll achieve. ✨
                        Enjoy every single second of this beautiful journey! 🌻
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
