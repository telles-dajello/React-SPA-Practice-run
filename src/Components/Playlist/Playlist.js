import React from 'react';
import TrackList from '../TrackList/Tracklist';

const Playlist = (props) => {
    return (
        <div>
            <input defaultValue={'New Playlist'}/>
            <TrackList tracks={props.playlistTracks} />
            <button class='Playlist-save' >SAVE TO SPOTIFY</button>
        </div>
    )
};

export default Playlist;