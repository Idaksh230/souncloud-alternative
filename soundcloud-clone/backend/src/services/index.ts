export class TrackService {
    private tracks: any[] = []; // This will hold the track data in memory for now

    public fetchTracks(): any[] {
        return this.tracks; // Returns the list of tracks
    }

    public saveTrack(track: any): void {
        this.tracks.push(track); // Adds a new track to the list
    }
}