import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Song from "../components/Song.js";
import SearchBar from "../components/SearchBar.js";
import "../styles/SearchSong.css";

export default function SearchSong() {
  const [songs, setSongs] = useState([]);
  const [url, setUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState([]);
  const [entityTerm, setEntityTerm] = useState([]);

  // when form submitted, send get request to API
  function makeUrl(searchTerm, entityTerm) {
    let searchUrl = searchTerm ? "?term=" + encodeURIComponent(searchTerm) : "";
    let entityUrl = entityTerm ? "&entity=" + entityTerm : "";

    let url = "https://itunes.apple.com/search" + searchUrl + entityUrl;
    setUrl(url);

    axios.get(url)
      .then(result => {
        setSongs(result.data.results);
      })
      .catch(error => {
        console.error(error);
      })
  }

  // when form submitted, send get request to API
  function handleSubmit(event) {
    // prevent default action of form (ex. refresh the page)
    event.preventDefault();
    makeUrl(searchTerm, entityTerm);
  }


  return (
    <div className="SearchSong">
      <div className="header">
        <h1>Sun Music</h1>
      </div>
      <div className="body">
        <SearchBar
          className="body-searchbar"
          handleSubmit={handleSubmit}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setEntityTerm={setEntityTerm}
        />
        <Song className="body-song" songs={songs} url={url} />
      </div>
      <div className="footer">
        <p>This is a material for React workshop at Cornell Daily Sun. </p>
        <p>Developed and designed by Yubin Heo.</p>
      </div>
    </div >
  )
}