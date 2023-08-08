import axios from "axios";
import store from "./store";

// axios.defaults.baseURL = 'http://127.0.0.1:5008/'
axios.defaults.baseURL = "https://vemapi.leonteqsecurity.com/";

axios.interceptors.request.use(async (config) => {
  const token = store.getters.getToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
