export const formatTrackData = (track) => {
    return {
        id: track.id,
        title: track.title,
        artist: track.artist,
        album: track.album,
    };
};

export const validateInput = (input) => {
    if (!input || typeof input !== 'string') {
        throw new Error('Invalid input');
    }
    return input.trim();
};