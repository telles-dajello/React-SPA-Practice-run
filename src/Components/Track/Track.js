import React from 'react';
import './Track.css';

const Track = (props) => {

    const addTrack = () {
        // A FAZER
    };

    const removeTrack = () => {
        // A FAZER
    };

    const addRemoveButton = () => {
        if (props.isRemove) {
            return (
                <button className='Track-action' onClick={removeTrack}>-</button>
            )
        } else {
            return (
                <button className='Track-action' onClick={addTrack}>+</button>
            )
        }
    };

    return (
        <div className='Track'>
            <div className='Track-information'>
                <h3>track name</h3>
                <p> artist name | album name</p>
            </div>
            { addRemoveButton()}
        </div>
    )
};