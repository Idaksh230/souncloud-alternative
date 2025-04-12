class Track {
    id: number;
    title: string;
    artist: string;
    album: string;

    constructor(id: number, title: string, artist: string, album: string) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.album = album;
    }
}

export default Track;