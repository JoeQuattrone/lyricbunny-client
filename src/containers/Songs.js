import React from 'react'
import Song from '../components/Song'
import ShowSong from './ShowSong'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

class Songs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: [],
      songTitle: ""
    }
  }

  componentDidMount(prevProps) {
  
  }

  listSongs = () => {
    return(
      this.props.songs.map((song) => <li key={song.track.track_id}><Link
 to={`${this.props.match.url}/${song.track.track_id}`}>{song.track.track_name}</Link></li>)
    )
  }

  render() {
    return (
      <div className="container">
        <h4>Showing results for "{`${localStorage.getItem("songTitle")}`}" </h4>
        <h1>Songs</h1>
        <div>{this.listSongs()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {songs: state.songsReducer.songs}
}

Songs.defaultProps = {songs: []}

export default connect(mapStateToProps)(Songs)
