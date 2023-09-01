import React, { useCallback, useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const search = useCallback(() => {
        props.onSearch(searchTerm)
    }, [props.onSearch, searchTerm]) 

    const handleTermChange = useCallback((event) => {
        setSearchTerm(event.target.value)
    }, []) 

    return (
        <div className="SearchBar">
            <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    )
}

export default SearchBar;