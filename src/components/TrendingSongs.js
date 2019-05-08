import React from 'react'
import TrendingSongCard from './TrendingSongCard'
class TrendingSongs extends React.Component {
  state = {
    trendingSongs: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/trending_songs')
      .then(res => res.json())
      .then(json => this.setState({
        trendingSongs: json
      }))
  }

  renderTrendingSongs = () => {
    return this.state.trendingSongs.map((song, id) => <TrendingSongCard key={id} song={song} />)
  }

  render() {
    return (
      <div>
        <h2>Trending Songs</h2>
        <div className="row">{this.renderTrendingSongs()}</div>
      </div>
    )
  }
}

export default TrendingSongs
