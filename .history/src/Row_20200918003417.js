import React, { useEffect, useState } from "react";
import "./Row.js";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs based on a specific condition
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function fetchData() {
      //   console.log(fetchUrl);
      const request = await axios.get(fetchUrl);
      //   console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {/* row__poster */}
        {movies.map((movie) => (
          <img src={movie.poster_path} alt={movie.name} />
        ))}
      </div>
      {/* container -> posters */}
    </div>
  );
}

export default Row;
