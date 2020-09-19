import React from "react";

import "./App.css";
import Row from "./Row";

function App() {
  return (
    <div className='app'>
      <h1>Netflix clone</h1>
      <Row title='NETFLIX ORIGINALS' />
      <Row title='Trending Now' />
    </div>
  );
}

export default App;
