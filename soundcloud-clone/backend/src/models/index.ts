export class Track {
    title: string;
    artist: string;
    fileUrl: string;

    constructor(title: string, artist: string, fileUrl: string) {
        this.title = title;
        this.artist = artist;
        this.fileUrl = fileUrl;
    }
}