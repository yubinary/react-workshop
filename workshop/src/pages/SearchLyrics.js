import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from "../components/SearchBar.js";
import "../styles/SearchLyrics.css";

export default function SearchLyrics() {
  const [lyrics, setLyrics] = useState([]);

  // make get request to pixabay API
  function makeFetch(url) {
    axios.get(url)
      .then(result => {
        setLyrics(result.data);
      })
      .catch(error => {
        console.error(error);
      })
  }

  // when form submitted, send get request to API
  function makeUrl(artistTerm, titleTerm) {
    let artistURL = "/" + encodeURIComponent(artistTerm);
    let titleURL = "/" + encodeURIComponent(titleTerm);

    let URL = "https://api.lyrics.ovh/v1" + artistURL + titleURL;
    console.log(URL);

    makeFetch(URL);
  }

  return (
    <div>
      <SearchBar makeUrl={makeUrl} />
      <Lyric lyrics={lyrics} />
    </div >
  )
}