//just usinv .env and gitignore doesn't make it secure. 
//It would be better to have another API in the server side 
//to keep this information. since this is just for practice 
//I am going to delete the app from my spotify after checking that this is working.
const clientId = REACT_APP_SPOTIFY_CLIENT_ID;
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

        } 
    }
}

export default Spotify;