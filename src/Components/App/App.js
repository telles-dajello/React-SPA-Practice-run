import React,{useCallback, useEffect, useState} from 'react';
import "./App.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from '../../util/Spotify';


const App =  () => {
    //initializing states... for now with hardcoded arrays for playlist and results
    const [searchResults, setSearchResults] = useState([
        {name: 'name1', artist: 'artist1', album: 'album1', id: 'id1'}, 
        {name: 'name2', artist: 'artist2', album: 'album2', id: 'id2'},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 'id3'}]);
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([
        {name: 'nameTrack1', artist: 'artist1', album: 'album1', id: 'id4'}, 
        {name: 'nameTrack2', artist: 'artist2', album: 'album2', id: 'id5'},
        {name: 'nameTrack3', artist: 'artist3', album: 'album3', id: 'id6'}]);
    
    // checks if a track is present in an array, if it isn't it spreads old array in playlist component and add one to the end
    const addTrack = useCallback((track) => {
        if (playlistTracks.find(chosenTrack => chosenTrack.id === track.id))
            return;
        setPlaylistTracks([...playlistTracks , track]);
    }, [playlistTracks]);

    //same as addTrack, but checks if track is in the array and returns all that arent it.
    const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevPlaylistTracks) => prevPlaylistTracks.filter(currentTrack => currentTrack.id !== track.id))
    }, []);


    const updatePlaylistName = (name) => {
        setPlaylistName(name)
    }

    const savePlaylist = useCallback(() => {
        const trackUris = playlistTracks.map((track) => track.uri);
        // Spotify.savePlaylist(playlistName, trackUris).then(() => {
        //     setPlaylistName("New Playlist");
        //     setPlaylistTracks([]);
        // });
        }, [playlistName, playlistTracks]);

    const search = (searchTerm) => {
        Spotify.search(searchTerm).then(setSearchResults) 
    }


    //renders the stylized name, a search bar with results below and a similar box
    // for playlist and added tracks. flex so depending on the screen size it will be below or next to the search div
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App"> 
            {/* SearchBar component, inside is the SearchResults and Playlist components. with props being passed down to them, 
            in this case, that wich is set in the states defined above */}
                <SearchBar onSearch={search} />
                <div className="App-playlist">               
                    <SearchResults onAdd={addTrack} searchResults= {searchResults} />                
                    <Playlist onAdd={addTrack} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} playlistName= {playlistName} playlistTracks={playlistTracks} />
                </div>
            </div>
            </div>        
    )
};

export default App;

// const container = document.getElementById("App");
// const root = createRoot(container);
// root.render(<App />);