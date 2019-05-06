import React from 'react'
import Song from '../components/Song'
import ShowSong from './ShowSong'
import { Link, Route, Switch } from 'react-router-dom';

class Songs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: [],
      songTitle: ""
    }
  }

// set local state to state from props
  componentDidMount(prevProps) {
    if (this.props.location.state.songs) {
      this.setState({
        songs: this.props.location.state.songs,
        songTitle: this.props.location.state.songTitle
      })
    }
  }

  // redirectToSong = (e,song) => {
  //   debugger
  // }

   // onClick={ e => this.redirectToSong(e, song)}

  listSongs = () => {
    return(
      this.state.songs.map((song, id) => <li key={id}><Link to={`${this.props.match.url}/${id}`}>{song.track.track_name}</Link></li>)
    )
  }

  render() {
    return (
      <div className="container">
        <h4>Showing results for "{`${this.state.songTitle}`}" </h4>
        <h1>Songs</h1>
        <div>{this.listSongs()}</div>
      </div>
    )
  }
}

export default Songs
