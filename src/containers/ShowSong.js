import React from 'react'
import { connect } from 'react-redux'
import {fetchLyrics} from '../actions/songActions'

class ShowSong extends React.Component {

  componentDidMount() {
  }

  fetchSongs = () => fetchLyrics(this.props.songs[this.props.match.params.songId])


  render() {
    const songId  = this.props.match.params.songId
    const song = this.props.songs[this.songId]

    return (
      <div className="container">
        <h1>{console.log(this.props.songs)} ShowSong</h1>
        <h2>djodjodj</h2>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    songs: state.songsReducer.songs,
    loading: state.songsReducer.loading
  }
}

export default connect(mapStateToProps)(ShowSong)
