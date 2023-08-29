import React from 'react';
import TrackList from '../TrackList/Tracklist';
import './Playlist.css';

//takes props from app and creates a div uding these props to be rendered back at app
const Playlist = (props) => {
    const handleNameChange = (event) => {
        props.onNameChange(event.target.value)
    } 
    return (
        <div className='Playlist'>
            <input defaultValue={'New Playlist'} onChange={handleNameChange} />
            <TrackList isRemove={true} onRemove={props.onRemove} tracks={props.playlistTracks} />
            <button className='Playlist-save' onClick={props.onSave} >SAVE TO SPOTIFY</button>
        </div>
    )
};

export default Playlist;