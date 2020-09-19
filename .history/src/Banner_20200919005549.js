import React, { useState, useEffect } from "react";

import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        ),`,
      }}
    >
      <div className='banner__contents'>
        {/* title */}
        <h1></h1>
        {/* div > 2 button */}
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;