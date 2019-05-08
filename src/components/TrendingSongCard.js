import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class TrendingSongCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      liked: false
    }
  }

  likeSong = (e) => {
    if (this.state.liked === false) {
      this.setState({
        liked: true
      })

      let data = {
        song: this.findSong()
      }
      fetch('http://localhost:3001/update_likes_from_home', {
        method: "POST",
        mode: 'cors',
        headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify(data)
      })
    }
  }

  findSong = () => this.props.song


  render() {
    return (
      <div className="col s4 m4">
        <div className="card blue-grey darken -1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.song.track_name}</span>
            {console.log(this.props)}
            <p>{this.props.song.artist_name}</p>
            <p>{this.props.song.genre}</p>
            <p>{this.props.song.likes} likes</p>
          </div>
          <div className="card-action">
            <a href="#">LIKE THIS SONG</a>
            {this.state.liked ? <span><FontAwesomeIcon icon={faHeart}size="lg" className="heart-icon"  /></span> :
            <span onClick={e => this.likeSong(e)}><FontAwesomeIcon id={this.props.song.id} icon={farFaHeart}size="lg" className="heart-icon white-text"  /></span>}
          </div>
        </div>
      </div>
    )
  }
}

export default TrendingSongCard
