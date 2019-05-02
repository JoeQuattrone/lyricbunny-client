import React from 'react'

class ShowSong extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.song.track_name} by {this.props.song.artist_name}</h1>
      </div>
    )
  }
}

export default ShowSong
