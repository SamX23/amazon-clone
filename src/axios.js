import axios from "axios";

const instance = axios.create({
  // The api (cloud funtion) URL
  baseURL: "https://us-central1-challenge-97a60.cloudfunctions.net/api",
  //"http://localhost:5001/challenge-97a60/us-central1/api",
});

export default instance;

// Development
// firebase emulators:start
