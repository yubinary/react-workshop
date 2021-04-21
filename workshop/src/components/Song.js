import React from 'react';

export default function Song({ songs, url }) {

  function displaySongs(songs) {
    let result = [];

    if (songs.length === 0 && url !== "") {
      result.push(
        <div className="empty">
          <p>No Search Result</p>
        </div>
      )
    }
    for (let s of songs) {
      result.push(
        <div className="song">
          <img src={s.artworkUrl100} />
          <div className="info">
            <h4>{s.trackName}</h4>
            <p>{s.artistName}</p>
          </div>
        </div>
      )
    } return result
  }

  return (
    <div>
      {displaySongs(songs)}
    </div>
  )
}