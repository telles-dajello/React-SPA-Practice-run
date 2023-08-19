import React from 'react';
import TrackList from '../TrackList/Tracklist';

const Playlist = () => {
    return (
        <div>
            <input defaultValue={'New Playlist'}/>
            {/* <TrackList /> */}
            <button class='Playlist-save' >SAVE TO SPOTIFY</button>
        </div>
    )
};

export default Playlist;