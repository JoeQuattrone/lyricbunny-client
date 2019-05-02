import React from 'react'

class Song extends React.Component {
  render() {
    return (
      <h1>{this.props.song.track_name} by {this.props.song.artist_name}</h1>
    )
  }
}

export default Song
