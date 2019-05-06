import React from 'react'
import SongSearch from '../components/SongSearch'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions/songActions'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      songTitle: ""
    }
  }

// fetch songs and save song title to state
  searchSongs = (state) => {
    this.props.fetchSongs(state, this.props.history)
    localStorage.setItem("songTitle", state.songTitle)
    this.setState({
      ...state,
      songTitle: state.songTitle
    })
  }


  render() {
    return (
      <div className="container">
        <div className="Home">
          <SongSearch searchSongs={this.searchSongs}/>
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
