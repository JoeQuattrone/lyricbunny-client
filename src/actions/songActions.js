const axios = require('axios');
const BASE_URL = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/"

export function fetchSongs(state) {
  const url = BASE_URL + `track.search?q_track=${state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=523ebe747e1a258aaddd09f97f90cb70`

  return (dispatch) => {
    dispatch({ type: 'LOADING_SONG' })
    return axios.get(url)
      .then(res => res.data.message.body.track_list)
      .then(trackList => dispatch({ type: 'ADD_SONG', payload: trackList }))
  }
}

export function fetchLyrics(song) {
  const trackId = song.track.trackId
  const url = BASE_URL + `track.lyrics.get?track_id=${trackId}`

  return (dispatch) => {
    dispatch({ type: 'LOADING_LYRICS' })
    return axios.get(url)
      .then(res => console.log(res.data))
  }
}
