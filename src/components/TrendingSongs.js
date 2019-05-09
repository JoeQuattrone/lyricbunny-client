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
      <div className="container">
        <h3 id="trending-songs">Trending Songs</h3>
        <div className="row white-row">{this.renderTrendingSongs()}</div>
      </div>
    )
  }
}

export default TrendingSongs
