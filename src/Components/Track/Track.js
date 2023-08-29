import React from 'react';
import './Track.css';
// receives from Tracklist. renders the tracks using the information passed down from it.
const Track = (props) => {
    //passed down from app to searchresults to tracklist and to here. 
    //it calls the function onAdd on the props track
    const addTrack = (event) => {
        props.onAdd(props.track)
    };
    //on clicking "-" button the onRemove function will be called, check
    // the track id and remove it from the playlist.
    const removeTrack = () => {
        props.onRemove(props.track)
    };

    const addRemoveButton = () => {
        if (props.isRemove) {
            return (
                <button className='Track-action' 
                onClick={removeTrack}
                >-</button>
            )
        } else {
            return (
                <button className='Track-action' 
                onClick={addTrack}
                >+</button>
            )
        }
    };

    return (
        <div className='Track'>
            <div className='Track-information'>
                <h3>{props.track.name}</h3>
                <p> {props.track.artist} | {props.track.album}</p>
            </div>
            { addRemoveButton()}
        </div>
    )
};

export default Track;