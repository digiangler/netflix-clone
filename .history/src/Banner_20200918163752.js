import React, { useState } from "react";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //
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
