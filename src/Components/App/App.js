import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import styles from "./App.module.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Track from "../Track/Track";
import Tracklist from "../TrackList/Tracklist";

const App =  () => {
    return (
        <div>
            <h1>Ja<span class="highlight">mmm</span>ing</h1>
            <div className="App">                
                <SearchBar />
                <div class="App-playlist">               
                {/* <SearchResults />                 */}
                {/* <Playlist /> */}
                </div>
            </div>
            </div>        
    )
};


//const container = document.getElementById("App");
//const root = createRoot(container);
//root.render(<App />);