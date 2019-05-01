const axios = require('axios');
const CORS_PROXY = "https://api.musixmatch.com/ws/1.1/"

export function fetchSongs(state) {
  const url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=523ebe747e1a258aaddd09f97f90cb70`

  const params = {
		method: 'GET',
		mode: 'no-cors',
    headers: {
            "Content-Type": "application/json",
        }
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_SONG' })
    return axios.get(url)
      .then(res => res.data.message.body.track_list)
      .then(trackList => dispatch({ type: 'ADD_SONG', payload: trackList }))
  }
}

// axios
//   .get(
//     `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=523ebe747e1a258aaddd09f97f90cb70`
//   ).then(res => console.log(res))
