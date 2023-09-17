import axios from "axios";
import User from "../utils/user";
// eslint-disable-next-line no-undef
const HttpClient = axios.create({ baseURL: import.meta.env.VITE_API_URL });

HttpClient.interceptors.request.use(async (config) => {
  const token = await User.getUserToken();
  const newConfig = { ...config };
  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return newConfig;
});

export default HttpClient;