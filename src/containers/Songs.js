import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ListSongs from '../components/Songs/ListSong'

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
        <h4>Search results for <span className="bold"> {localStorage.getItem("songTitle")}</span></h4>
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
