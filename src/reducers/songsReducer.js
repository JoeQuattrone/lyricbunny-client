import { fetchSongs, fetchLyrics } from '../actions/songActions'
import cuid from 'cuid';
export const cuidFn = cuid;

export default function songsReducer(state = {
  songs: [],
  loading: false
}, action) {
  switch(action.type) {
    case 'LOADING_SONG':
    return {...state, loading: true}

    case 'ADD_SONG':
    return {...state, loading: false, songs: action.payload}

    case 'LOADING_LYRICS':
    return {...state, loading: true}

    case 'ADD_LYRICS':
    return {...state, loading: false, lyrics: action.payload}

    default:
    return state
  }
}
