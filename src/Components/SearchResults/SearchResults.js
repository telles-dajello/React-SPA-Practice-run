import React from 'react';
import Tracklist from '../TrackList/Tracklist';
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className='SearchResults'>
            <h2>Search Results</h2>
            <Tracklist tracks= {props.SearchResults} />
        </div>
    )
};


export default SearchResults;