import React from 'react'

class SongSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      songTitle: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchSongs(this.state)
    this.setState({
      songTitle: ""
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="SongSearch">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" name="songTitle" onChange={(e) => this.handleChange(e)} placeholder="Type song title" value={this.state.songTitle}/>
          <input type="submit" value="SEARCH" />
        </form>
      </div>
    )
  }
}

export default SongSearch
