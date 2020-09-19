import React, { useState } from "react";

import requests from "./Requests";
import axios from "./axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.results);
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
