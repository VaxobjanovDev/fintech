import axios from "axios";

const API_URL = "https://test-app.financialit.net/api/";
const API_VERSION = "v1/";

export const api = axios.create({
  baseURL: API_URL + API_VERSION,
});

api.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getCompoanyList = (searchText) =>
  api.post(`/company/list`, {
    page: 0,
    searchText: searchText,
    size: 5,
  });

export const getCompanyById = (id) => api.get(`/company/` + id);
