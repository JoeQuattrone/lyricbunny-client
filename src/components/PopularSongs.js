import React from 'react'
import { connect } from 'react-redux'
import { fetchPopularSongs } from '../actions/songActions'
import SongCard from './SongCard'

class PopularSongs extends React.Component {
  componentDidMount() {
    this.props.fetchPopularSongs()
  }

  renderPopularSongs1 = () => {
    return this.props.popularSongs ? this.props.popularSongs.slice(0, 3).map((song, id) => <SongCard key={id} song={song} />) : null
  }

  renderPopularSongs2 = () => {
    return this.props.popularSongs ? this.props.popularSongs.slice(3).map((song, id) => <SongCard key={id} song={song} />) : null
  }

  render() {
    return (
      <>
        <h4 className="home-heading">Chart Topping Songs</h4>
        <div className="row white-row">{this.renderPopularSongs1()}
        </div>
        <div className="row white-row">{this.renderPopularSongs2()}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    popularSongs: state.songsReducer.popularSongs
  }
}

export default connect(mapStateToProps, { fetchPopularSongs })(PopularSongs)
