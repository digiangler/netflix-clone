import React, { useEffect, useState } from "react";

import YouTube from "react-youtube";

import "./Row.css";
import "./Row.js";
import axios from "./axios";
import YoutubeApi from "./youtube";

const base_url = "https://image.tmdb.org/t/p/original/"; //posterpath

function Row({ title, fetchUrl, isLargeRow }) {
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

  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {/* row__poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <YouTube videoId={trailerUrl} opts={opts} />
    </div>
  );
}

export default Row;
