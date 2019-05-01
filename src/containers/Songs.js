import React from 'react'

class Songs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: []
    }
  }

  componentDidMount(prevProps) {
    if (this.props.location.state.songs) {
      this.setState({
        songs: this.props.location.state.songs
      })
    }
  }

  listSongs = () => {
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h1>Songs</h1>
        <div>{this.listSongs()}</div>
      </div>
    )
  }
}

export default Songs
