import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchTracks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tracks`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tracks: ' + error.message);
    }
};

export const uploadTrack = async (trackData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/tracks`, trackData);
        return response.data;
    } catch (error) {
        throw new Error('Error uploading track: ' + error.message);
    }
};