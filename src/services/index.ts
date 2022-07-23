import axios from "axios";

const api = axios.create({
  baseURL: "http://openlibrary.org/",
});

export default api;
