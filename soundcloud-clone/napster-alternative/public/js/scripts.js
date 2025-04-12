document.addEventListener('DOMContentLoaded', function() {
    const trackList = document.getElementById('track-list');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function fetchTracks() {
        fetch('/api/tracks')
            .then(response => response.json())
            .then(data => {
                displayTracks(data);
            })
            .catch(error => console.error('Error fetching tracks:', error));
    }

    function displayTracks(tracks) {
        trackList.innerHTML = '';
        tracks.forEach(track => {
            const trackItem = document.createElement('li');
            trackItem.textContent = `${track.title} by ${track.artist}`;
            trackList.appendChild(trackItem);
        });
    }

    searchButton.addEventListener('click', function() {
        const query = searchInput.value;
        searchTracks(query);
    });

    function searchTracks(query) {
        fetch(`/api/tracks/search?query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                displayTracks(data);
            })
            .catch(error => console.error('Error searching tracks:', error));
    }

    fetchTracks();
});