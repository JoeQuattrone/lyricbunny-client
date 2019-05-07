import React from 'react'
import { connect } from 'react-redux'
import { fetchLyrics } from '../actions/songActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'

library.add(fas)

class ShowSong extends React.Component {

  componentDidMount() {
    fetchLyrics(this.props.match.params.songId)
  }

  render() {
    return (
      <div className="container">
        <h1> ShowSong</h1>
        <h2>djodjodj</h2>
        <FontAwesomeIcon icon={farFaHeart}size="lg" />

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
