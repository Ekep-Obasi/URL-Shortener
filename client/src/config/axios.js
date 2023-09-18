import axios from "axios";

const httpClient = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}/api/v1`,
});

export default httpClient;
