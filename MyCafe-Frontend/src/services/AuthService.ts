import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api"; // your Laravel API

export interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data, {
      withCredentials: true, // required if using Sanctum
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Login failed" };
  }
};
