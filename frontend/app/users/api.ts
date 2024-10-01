import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const getUsers = async () => {
  return axios.get("http://localhost:3001/api/users");
};

export const createUser = async (userData: any) => {
  return axios.post(`${API_URL}/users`, userData);
};

export const updateUser = async (id: any, userData: any) => {
  return axios.patch(`${API_URL}/users/${id}`, userData);
};

export const deleteUser = async (id: string) => {
  return axios.delete(`${API_URL}/users/${id}`);
};
