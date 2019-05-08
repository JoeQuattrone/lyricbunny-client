import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class TrendingSongCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      liked: false,
      likes: props.song.likes
    }
  }

  likeSong = (e) => {
    if (this.state.liked === false) {
      this.setState({
        liked: true,
        likes: this.state.likes + 1
      })

      let data = {
        song: this.props.song
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



  render() {
    return (
      <div className="col s12 m6 l4">
        <div className="card blue-grey darken -1">
          <Link
            to={{
              pathname: 'songs/'+ this.props.song.track_id,
              state: { song: this.props.song}
            }} >
            <div className="card-content white-text">
              <span className="card-title">{this.props.song.track_name}</span>
              {console.log(this.props)}
              <p>{this.props.song.artist_name}</p>
              <p>{this.props.song.genre}</p>
              <p>{this.state.likes} likes</p>
            </div>
          </Link>
          <div className="card-action">
            <Link
              to={{
                pathname: 'songs/'+ this.props.song.track_id,
                state: { song: this.props.song}
              }} >LIKE THIS SONG</Link>
            {this.state.liked ? <span><FontAwesomeIcon icon={faHeart}size="lg" className="heart-icon white-text right"  /></span> :
            <span onClick={e => this.likeSong(e)}><FontAwesomeIcon id={this.props.song.id} icon={farFaHeart}size="lg" className="heart-icon white-text right"  /></span>}
          </div>
        </div>
      </div>
    )
  }
}

export default TrendingSongCard
