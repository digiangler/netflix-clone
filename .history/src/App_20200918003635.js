import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";

function App() {
  return (
    <div className='app'>
      <h1>Hey Clever Programmer! Let's build</h1>

      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Mytery' fetchUrl={requests.fetchMystery} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
