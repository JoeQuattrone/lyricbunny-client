import React from 'react'
import Song from '../components/Song'
import ShowSong from './ShowSong'
import { Link, Route } from 'react-router-dom';

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

  // listSongs = () => {
  //   console.log(this.state)
  //   return (
  //     this.state.songs.map((song, i) => <Song key={i} song={song.track}/>)
  //   )
  // }

  // const MoviesList = ({ movies }) => {
  // const renderMovies = Object.keys(movies).map(movieID =>
  //   <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  // );

  //  listSongs = () => {
  //   return(
  //     Object.keys(this.state.songs).map(songId => <Link key={songId} to={`/songs/${songId}`}>{this.state.songs[songId].track.track_name}</Link>)
  //   )
  // }

  // <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow movies={movies} {...routerProps} /> }/>
  // </div>

  listSongs = () => {
    return(
      this.state.songs.map((song, id) => <li key={id}><Link to={`${this.props.match.url}/${id}`}>{song.track.track_name}</Link></li>)
    )
  }

  render() {
    return (
      <div>
      {console.log(this.props)}
        <h4>Showing results for "{`${this.state.songTitle}`}" </h4>
        <h1>Songs</h1>
        <div>{this.listSongs()}</div>
        <Route path={`${this.props.match.path}/:songId`} component={ShowSong} />

      </div>
    )
  }
}

export default Songs
//         <Route path={`/songs/:songId`} render={routerProps => <ShowSong songs={this.state.songs}/>} />
