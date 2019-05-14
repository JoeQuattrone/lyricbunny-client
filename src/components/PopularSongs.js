import React from 'react'
import { connect } from 'react-redux'
import { fetchPopularSongs } from '../actions/songActions'
import PopularSongCard from './PopularSongCard'

class PopularSongs extends React.Component {
  componentDidMount() {
    this.props.fetchPopularSongs()
  }

  renderPopularSongs = () => {
    this.props.popularSongs ? this.props.popularSongs.map((song, id) => <PopularSongCard key={id} song={song} />) : null
  }

  render() {
    return (
      <div className="row white-row">{this.renderPopularSongs()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    popularSongs: state.songsReducer.popularSongs
  }
}

export default connect(mapStateToProps, { fetchPopularSongs })(PopularSongs)
