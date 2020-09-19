import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const { movies, setMovies } = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // If [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl, setMovies]);

  console.log(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {/* several row__poster(s) */}

        {movies.map((movies) => (
          <img src={`${base_url}${movies.poster_path}`} alt={movies.name} />
        ))}
      </div>
    </div>
  );
}

export default Row;
