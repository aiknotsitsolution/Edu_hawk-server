import axios from "axios";

const API_URL = "https://eduhawk-server-urpn.onrender.com/api/product";

export const createProductApi = (formData) => {
  return axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateHomeApi = (id, data) => {
  return axios.put(
    `https://eduhawk-server-urpn.onrender.com/api/updatehome/${id}`,
    data,
  );
};
export const deleteHomeApi = (id) => axios.delete(`${API_URL}/${id}`);

export const getProductsApi = () => {
  return axios.get(API_URL);
};
export const getPaginatedProductsApi = ({
  page = 1,
  limit = 10,
  search = "",
} = {}) =>
  axios.get("https://eduhawk-server-urpn.onrender.com/api/product/paginated", {
    params: { page, limit, search },
  });
