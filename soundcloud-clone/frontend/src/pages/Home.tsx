import React, { useEffect, useState } from 'react';
import { fetchTracks } from '../utils/api';

const Home: React.FC = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const loadTracks = async () => {
            const fetchedTracks = await fetchTracks();
            setTracks(fetchedTracks);
        };

        loadTracks();
    }, []);

    return (
        <div className="home">
            <h1>Welcome to SoundCloud Clone</h1>
            <h2>Available Tracks</h2>
            <ul>
                {tracks.map((track) => (
                    <li key={track.id}>
                        <h3>{track.title}</h3>
                        <p>Artist: {track.artist}</p>
                        <audio controls>
                            <source src={track.fileUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;