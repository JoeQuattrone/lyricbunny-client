import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const ListSong = () => {
  const { song } = this.props
  return (
    <div className="col s12 song-row clearfix">
      <div className="icon-box"><FontAwesomeIcon icon={faMusic}size="lg"/></div>
      <div>
        <Link className="song-link" to={this.props.link}>{song.track.track_name}</Link>
        <p className="artist-name">{song.track.artist_name}</p>
      </div>
      <hr/>
    </div>
  )
}


// class ListSong extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//
//     return (
//       <div className="col s12 song-row clearfix">
//         <div className="icon-box"><FontAwesomeIcon icon={faMusic}size="lg"/></div>
//         <div>
//           <Link className="song-link" to={this.props.link}>{song.track.track_name}</Link>
//           <p className="artist-name">{song.track.artist_name}</p>
//         </div>
//         <hr/>
//       </div>
//     )
//   }
// }

export default ListSong
