import { fetchSongs } from '../actions/songActions'
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
    return {loading: false, songs: action.payload}

    default:
    return state
  }
}
