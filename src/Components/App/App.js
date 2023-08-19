import React,{useState} from 'react';
import styles from "./App.module.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Track from "../Track/Track";
import Tracklist from "../TrackList/Tracklist";
// assitir https://www.youtube.com/watch?v=DH991Dzb9iE e acompanhar em https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-react-part-ii/modules/fecp-challenge-project-jammming/projects/jammming-prj?_gl=1*18rloqx*_ga*MTU0NTc4MjU3Ny4xNjY5MTM3NjU4*_ga_3LRZM6TM9L*MTY5MjE1MTY5Mi4yNC4wLjE2OTIxNTE2OTIuNjAuMC4w

const App =  () => {
    return (
        <div>
            <h1>Ja<span class="highlight">mmm</span>ing</h1>
            <div className="App">                
                <SearchBar />
                <div class="App-playlist">               
                <SearchResults />                
                <Playlist />
                </div>
            </div>
            </div>        
    )
};


//const container = document.getElementById("App");
//const root = createRoot(container);
//root.render(<App />);