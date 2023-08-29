import React from 'react';
import TrackList from '../TrackList/Tracklist';
import './Playlist.css';
//takes props from app and creates a div uding these props to be rendered back at app
const Playlist = (props) => {
    return (
        <div className='Playlist'>
            <input defaultValue={'New Playlist'}/>
            <TrackList isRemove={true} onRemove={props.onRemove} tracks={props.playlistTracks} />
            <button className='Playlist-save' >SAVE TO SPOTIFY</button>
        </div>
    )
};

export default Playlist;