const CORS_PROXY = "https://api.musixmatch.com/ws/1.1/"


export function fetchSongs(state) {
  const url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_APIKEY}`
  debugger
  return (dispatch) => {
    dispatch({ type: 'LOADING_SONG' })
    return fetch(url)
      .then(res => console.log(res))
  }
}
