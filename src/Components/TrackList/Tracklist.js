import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

//component taking props from the SearchResults componet where this component is used.
const TrackList = (props) => {
    return (
        <div className='TrackList'>
            {/* takes the tracks value from prop, expected to be an array, 
            and maps it using the track component. The track here passes down two props to its 
            component for it to deal with these pieces of data as they see fit.   */}
            {props.tracks.map((track) => {
                    return (<Track isRemove={props.isRemove} onAdd={props.onAdd} onRemove={props.onRemove} track={track} key={track.id} />);
                })}
        </div>
    );
};

export default TrackList;