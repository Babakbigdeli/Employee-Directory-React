import axios from "axios";

// using Axios to make http requests and fetch a random list of employees as sample. Wrapping it as a method and
// export it as an object.
// eslint-disable-next-line
export default {
  getRandomEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=50");
  }
};
