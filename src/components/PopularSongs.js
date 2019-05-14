import React from 'react'
import { connect } from 'react-redux'
import { fetchPopularSongs } from '../actions/songActions'

class PopularSongs extends React.Component {
  componentDidMount() {
    this.props.fetchPopularSongs()
  }

  render() {
    return (
      <div>{console.log(this.props)}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    popularSongs: state.songsReducer.popularSongs
  }
}

export default connect(mapStateToProps, { fetchPopularSongs })(PopularSongs)
