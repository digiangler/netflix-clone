import React, { useState, useEffect } from "react";
import axios from "./axios";

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

        {movies.map((movie) => (
          <img src={movie.poster_path} alt={movie.name} />;
        ))}
      </div>
    </div>
  );
}

export default Row;