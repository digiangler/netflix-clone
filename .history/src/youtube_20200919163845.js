import axios from "axios";

const YoutubeKey = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export default YoutubeKey;
