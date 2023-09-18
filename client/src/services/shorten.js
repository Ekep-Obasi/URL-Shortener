import httpClient from "../config/axios";

const shorten = (url) => {
  return httpClient.post(`shortener`, { longUrl: url });
};

export default shorten;
