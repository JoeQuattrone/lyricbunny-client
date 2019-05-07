import React from 'react'
import { connect } from 'react-redux'
import { fetchLyrics } from '../actions/songActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class ShowSong extends React.Component {

  state = {
    liked: false,
  }

  componentDidMount() {
    this.props.fetchLyrics(this.props.match.params.songId)
  }

  //persist to rails api
  likeSong = (e) => {
    if (this.state.liked === false) {
      this.setState({
        liked: true
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h5>Lyrics</h5>
          <div className="row">
          <h1 className=" col s10 song-header"> Song Name</h1>
            <div className="col s2 heart-div">
            {this.state.liked ?  <span><FontAwesomeIcon icon={faHeart}size="lg" className="heart-icon"  /></span>: <span onClick={e => this.likeSong(e)}><FontAwesomeIcon icon={farFaHeart}size="lg" className="heart-icon"  /></span>}
            </div>
          </div>

        <h4>Artist Name</h4>
        <hr/>
        <div className="InnerContainer">
          <p>Lyrics</p>
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

export default connect(mapStateToProps, { fetchLyrics })(ShowSong)
