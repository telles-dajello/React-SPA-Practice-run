import React from 'react';
import TrackList from '../TrackList/Tracklist';
import styles from './SearchResults';

const SearchResults = () => {
    return (
        <div className='SearchResults'>
            <h2>Search Results</h2>
            <Tracklist />
        </div>
    )
};


export default SearchResults;