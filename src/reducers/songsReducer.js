import cuid from 'cuid';
export const cuidFn = cuid;

export default function songsReducer(state = {
  songs: [],
  loading: false
}, action) {
  return state
}
