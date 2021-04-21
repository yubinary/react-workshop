import React from 'react';

export default function SearchBar({ handleSubmit, searchTerm, setSearchTerm, setEntityTerm }) {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input form-control"
          type="text"
          placeholder="Search for songs"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}>
        </input>
        <select
          className="form-control"
          onChange={(event) => setEntityTerm(event.target.value)}
        >
          <option value="musicTrack">music</option>
          <option value="musicVideo">music video</option>
          <option value="movie">movie</option>
          <option value="podcast">podcast</option>
        </select>
        <button type="submit" class="btn btn-light">Search</button>
      </form>
    </div>
  )
}