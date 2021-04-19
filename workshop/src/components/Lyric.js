import React, { useState, useEffect } from 'react';

export default function Lyric({ lyric }) {
  const [artistTerm, setArtistTerm] = useState("");
  const [titleTerm, setTitleTerm] = useState("");

  useEffect(() => {
    makeUrl("", "");
  }, []);

  // when form submitted, send get request to API
  function handleSubmit(event) {
    // prevent default action of form (ex. refresh the page)
    event.preventDefault();
    makeUrl(artistTerm, titleTerm);
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search by artist"
          value={artistTerm}
          onChange={(event) => setArtistTerm(event.target.value)}>
        </input>
        <input
          className="input"
          type="text"
          placeholder="Search by title"
          value={titleTerm}
          onChange={(event) => setTitleTerm(event.target.value)}>
        </input>
        <button>Search</button>
      </form>
    </div>
  )
}