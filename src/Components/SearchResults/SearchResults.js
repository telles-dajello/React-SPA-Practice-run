import React from 'react';
import TrackList from '../TrackList/Tracklist';
import './SearchResults.css';
// takes the prop from app, and renders a div with a component... 
//passes down the prop for it to render in a specific way.
const SearchResults = (props) => {
    return (
        <div className='SearchResults'>
            <h2>Search Results</h2>
            <TrackList onAdd={props.onAdd} tracks={props.searchResults} />
        </div>
    )
};


export default SearchResults;