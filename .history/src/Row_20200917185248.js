import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title }) {
  const { movies, setMovies } = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // If [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>

      {/* container -> posters */}
    </div>
  );
}

export default Row;
