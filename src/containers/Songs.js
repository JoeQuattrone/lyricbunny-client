import React from 'react'
import Song from '../components/Song'
import { Link } from 'react-router-dom';

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

  listSongs = () => {
    console.log(this.state)
    return (
      this.state.songs.map((song, i) => <Song key={i} song={song.track}/>)
    )
  }

  render() {
    return (
      <div>
        <h4>Showing results for "{`${this.state.songTitle}`}" </h4>
        <h1>Songs</h1>
        <div>{this.listSongs()}</div>
      </div>
    )
  }
}

export default Songs
