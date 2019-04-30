import React from 'react'
import SongSearch from '../components/SongSearch'
import { Connect } from 'react-redux'
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <SongSearch />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchSong: song => dispatch({type: "SEARCH_SONG", payload: song})
  }
}

export default connect(null, mapDispatchToProps)(Home)
