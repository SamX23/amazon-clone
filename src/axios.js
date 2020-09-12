import axios from "axios";

const instance = axios.create({
  // The api (cloud funtion) URL
  baseURL: "http://localhost:5001/challenge-97a60/us-central1/api", // API (cloud functional) URL
});

export default instance;
