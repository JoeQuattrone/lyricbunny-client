const axios = require('axios');
const BASE_URL = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/"

export function fetchSongs(state, history) {
  const url = BASE_URL + `track.search?q_track=${state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=523ebe747e1a258aaddd09f97f90cb70`

  return (dispatch) => {
    dispatch({ type: 'LOADING_SONG' })
    return axios.get(url)
      .then(res => res.data.message.body.track_list)
      .then(trackList => {
          if (history) {
            history.push("/songs")
          } else {
            return  dispatch({ type: 'ADD_SONG', payload: trackList })
          }
      })
  }
}

export function fetchLyrics(trackId) {
  const url = BASE_URL + `track.lyrics.get?track_id=${trackId}&apikey=523ebe747e1a258aaddd09f97f90cb70`
  return (dispatch) => {
    dispatch({ type: 'LOADING_LYRICS' })
    return axios.get(url)
      .then(res => console.log(res))
      .then(data => dispatch({ type: 'ADD_LYRICS', payload: data }))
  }
}

// https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=13873035&apikey=523ebe747e1a258aaddd09f97f90cb70`
