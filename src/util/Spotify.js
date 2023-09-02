//just usinv .env and gitignore doesn't make it secure. 
//It would be better to have another API in the server side 
//to keep this information. since this is just for practice 
//I am going to delete the app from my spotify after checking that this is working.
const clientId = '4dfcb358affc4779b15e36c2fcfefc21';
const redirectUri = "http://localhost:3000"
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
        return accessToken;
    }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;

        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, 
        { headers: {
            Authorization: `Bearer ${accessToken}`
        }}).then(response => { 
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return []; //no results found!
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                uri: track.uri
            }));
        })
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris) {
            return
        }
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userId;

        return fetch(`https://api.spotify.com/v1/me`, {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, 
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: trackUris})
                });
            });
        }) 
    }
}

export default Spotify;