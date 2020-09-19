import React, { useState } from "react";

import requests from "./Requests";
import axios from "./axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        console.log(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        )
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header>
      {" "}
      {/* <<< Background image */}
      {/* title */}
      {/* div > 2 button */}
      {/* description */}
    </header>
  );
}

export default Banner;
