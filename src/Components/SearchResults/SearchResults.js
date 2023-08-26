import React from 'react';
import TrackList from '../TrackList/Tracklist';
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className='SearchResults'>
            <h2>Search Results</h2>
            <TrackList tracks={props.searchResults} />
        </div>
    )
};


export default SearchResults;