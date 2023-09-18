import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5050/api/v1",
});

export default httpClient;
