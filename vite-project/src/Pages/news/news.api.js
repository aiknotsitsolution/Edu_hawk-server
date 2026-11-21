import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_URL ||
  (typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:8000/api/v1/news"
    : "https://edu-hawk-server.onrender.com/api/v1/news");

export const getAllNewsApi = (params = {}) => {
  return axios.get(BASE_URL, {
    params: {
      includeDrafts: "true",
      ...params,
    },
  });
};

export const getNewsBySlugApi = (slug) => {
  return axios.get(`${BASE_URL}/${slug}`);
};

export const createNewsApi = (formData) => {
  return axios.post(BASE_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateNewsApi = (id, formData) => {
  return axios.put(`${BASE_URL}/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteNewsApi = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export const uploadNewsImageApi = (file) => {
  const formData = new FormData();
  formData.append("image", file);
  return axios.post(`${BASE_URL}/upload-image`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getNewsCategoriesApi = () => {
  return axios.get(`${BASE_URL}/categories`);
};

export const createNewsCategoryApi = (data) => {
  return axios.post(`${BASE_URL}/categories`, data);
};

export const deleteNewsCategoryApi = (id) => {
  return axios.delete(`${BASE_URL}/categories/${id}`);
};

export const getNewsCountriesApi = () => {
  return axios.get(`${BASE_URL}/countries`);
};

export const createNewsCountryApi = (data) => {
  return axios.post(`${BASE_URL}/countries`, data);
};

export const deleteNewsCountryApi = (id) => {
  return axios.delete(`${BASE_URL}/countries/${id}`);
};

export const seedNewsApi = () => {
  return axios.post(`${BASE_URL}/seed`);
};
