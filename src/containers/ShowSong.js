import React from 'react'
import { connect } from 'react-redux'
import {fetchLyrics} from '../actions/songActions'

class ShowSong extends React.Component {

  componentDidMount() {
    fetchLyrics(this.props.match.params.songId)
  }

  render() {
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

export default connect(mapStateToProps, { fetchLyrics })(ShowSong)
