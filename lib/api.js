"use client";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

api.interceptors.request.use(
  async (config) => {
    const json = localStorage.getItem("authToken");
    if (json) {
      config.headers.Authorization = `Bearer ${json}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
