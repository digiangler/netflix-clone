import React from "react";

import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className='app'>
      <h1>Netflix clone</h1>
      <Row title='NETFLIX ORIGINALS' fetchUrl={} />
      <Row title='Trending Now' fetchUrl={} />
    </div>
  );
}

export default App;
