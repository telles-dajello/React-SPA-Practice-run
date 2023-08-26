import React,{useEffect, useState} from 'react';
import "./App.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
// assitir https://www.youtube.com/watch?v=DH991Dzb9iE e acompanhar em https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-react-part-ii/modules/fecp-challenge-project-jammming/projects/jammming-prj?_gl=1*18rloqx*_ga*MTU0NTc4MjU3Ny4xNjY5MTM3NjU4*_ga_3LRZM6TM9L*MTY5MjE1MTY5Mi4yNC4wLjE2OTIxNTE2OTIuNjAuMC4w

const App =  () => {
    const [searchResults, setSearchResults] = useState([
        {name: 'name1', artist: 'artist1', album: 'album1', id: 'id1'}, 
        {name: 'name2', artist: 'artist2', album: 'album2', id: 'id2'},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 'id3'}]);
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState();
    
    
    const addTrack = (track) => {
        if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }         
        setPlaylistTracks([...playlistTracks , track]);
    }

    return (
        <div>
            <h1>Ja<span classname="highlight">mmm</span>ing</h1>
            <div className="App">                
                <SearchBar />
                <div classname="App-playlist">               
                <SearchResults searchResults= {searchResults} />                
                <Playlist playlistName= {playlistName} playlistTracks={playlistTracks} />
                </div>
            </div>
            </div>        
    )
};

export default App;

// const container = document.getElementById("App");
// const root = createRoot(container);
// root.render(<App />);