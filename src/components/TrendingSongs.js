import React from 'react'
import TrendingSongCard from './TrendingSongCard'
import logo from '../images/Ajax-loader.gif'


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
        <h4 id="trending-songs">Most liked songs</h4>
        {
          this.state.trendingSongs.length === 0 ? <div className="center"><img src={logo} /></div>
        :
          <div className="row white-row">{this.renderTrendingSongs()}</div>
        }
      </div>
    )
  }
}

export default TrendingSongs
