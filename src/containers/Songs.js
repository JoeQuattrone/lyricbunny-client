import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ListSong from '../components/Songs/ListSong'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


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
      this.props.songs.map(song => <ListSong key={song.track.track_id} song={song} link={`${this.props.match.url}/${song.track.track_id}`} />)
    )
  }

  render() {
    return (
      <div className="container">
        <p className="p-text">Search results for <span className="bold"> {localStorage.getItem("songTitle")}</span></p>
        <div className="row search-results-container">{this.listSongs()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {songs: state.songsReducer.songs}
}

Songs.defaultProps = {songs: []}

export default connect(mapStateToProps)(Songs)
