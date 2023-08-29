import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const search = () => {
        props.onSearch(searchTerm)
    }

    const handleTermChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="SearchBar">
            <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
    )
}

export default SearchBar;