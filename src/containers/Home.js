import React from 'react'
import SongSearch from '../components/SongSearch'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions/songActions'
import TrendingSongs from '../components/TrendingSongs'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      songTitle: ""
    }
  }

// fetch songs and save song title to state
  searchSongs = (state) => {
    localStorage.setItem("songTitle", state.songTitle)
    this.props.fetchSongs(state, this.props.history)
    this.setState({
      ...state,
      songTitle: state.songTitle
    })
  }

  render() {
    return (
        <div className="Home">
          <SongSearch searchSongs={this.searchSongs}/>
          <div className="white-background">
            <TrendingSongs />
          </div>
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



export default connect(mapStateToProps, { fetchSongs })(Home)
