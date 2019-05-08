import React from 'react'

function TrendingSongCard(props) {
  return (
    <div className="col s4 m4">
      <div className="card blue-grey darken -1">
        <div className="card-content white-text">
          <span className="card-title">{props.song.track_name}</span>
          {console.log(props)}
          <p>{props.song.artist_name}</p>
          <p>{props.song.genre}</p>
          <p>{props.song.likes} likes</p>
        </div>
        <div className="card-action">
          <a href="#">LIKE THIS SONG</a>
          
        </div>
      </div>
    </div>
  )
}

export default TrendingSongCard
