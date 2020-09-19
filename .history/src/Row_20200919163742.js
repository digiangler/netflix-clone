import React, { useState, useEffect } from "react";

import YouTube from "react-youtube";

import "./Row.css";
import axios from "./axios";
import YoutubeApi from "./youtube";

const baseUrl = "https://image.tmdb.org/t/p/original/"; //posterpath

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);

  const opts = {
    height: "390px",
    width: "100%",
    playVars: {
      autoPlay: 1,
    },
  };

  const handleClick = async (movie) => {
    const movietrailername = isLargeRow
      ? movie.target.alt + " Official Trailer Netflix"
      : movie.target.alt + " Official Trailer";
    const youtubeUrl = `search?part=snippet&q=${movietrailername}&&type=video&key=Your_Youtube_Api_Key`;

    const response = await YoutubeApi.get(youtubeUrl);

    setTrailerUrl((prev) =>
      prev === response.data.items[0].id.videoId
        ? ""
        : response.data.items[0].id.videoId
    );
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => {
          if (movie.poster_path === null || movie.backdrop_path === null)
            return "";
          else
            return (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                onClick={handleClick.bind()}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie?.title || movie?.original_name}
              />
            );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
