import React from 'react'
import SongSearch from '../components/SongSearch'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions/songActions'
class Home extends React.Component {

  searchSongs = (state) => {
    this.props.fetchSongs(state)
  }

  render() {
    return (
      <div className="Home">
        <SongSearch searchSongs={this.searchSongs}/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add_Song: song => dispatch({type: "ADD_SONG", payload: song})
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songsReducer.songs,
    loading: state.songsReducer.loading
  }
}



export default connect(mapStateToProps, { fetchSongs })(Home)
