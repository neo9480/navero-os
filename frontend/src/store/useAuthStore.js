import config from "@/lib/config";
import { create } from "zustand";
import axios from "axios";

const BASE_AUTH_URL = config.BASE_AUTH_URL;
const BASE_DOCUMENT_URL = config.BASE_DOCUMENT_URL;
const BASE_FINANCE_URL = config.BASE_FINANCE_URL;
const BASE_OPERATIONS_URL = config.BASE_OPERATIONS_URL;
const BASE_OPERATORS_URL = config.BASE_OPERATORS_URL;
const BASE_USER_URL = config.BASE_USER_URL;
const BASE_SHIPMENT_URL = config.BASE_SHIPMENT_URL;
const BASE_SERVICES_URL = config.BASE_SERVICES_URL;

const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  message: null,
  email: null,
  userId: null,
  fileUrl: null,
  error: null,

  signUp: async (
    email,
    password,
    role,
    companyName,
    phone,
    address,
    country,
    plan,
  ) => {
    try {
      const res = await axios.post(
        `${BASE_AUTH_URL}/register`,
        {
          email,
          password,
          role,
          companyName,
          phone,
          address,
          country,
          plan,
        },
        { withCredentials: true },
      );
      set({ message: res.data.message, user: res.data.user });
    } catch (error) {
      set({ error: error.response?.data?.message || "error signing up" });
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      const res = await axios.post(
        `${BASE_AUTH_URL}/login`,
        { email, password },
        { withCredentials: true },
      );
      const user = res.data.user;
      const accessToken = res.data.accessToken;
      set({ message: res.data.message, user: user, accessToken: accessToken });
    } catch (error) {
      set({ error: error.response?.data?.message || "error signing in" });
      throw error;
    }
  },

  sendCode: async (email) => {
    try {
      const res = await axios.post(`${BASE_AUTH_URL}/send-code`, { email });
      const userId = res.data.userId;
      set({ message: res.data.message, userId: userId, email: res.data.email });
    } catch (error) {
      set({ error: error.response?.data?.message || "error signing in" });
      throw error;
    }
  },

  verifyEmail: async (email, otp) => {
    try {
      const res = await axios.post(
        `${BASE_AUTH_URL}/verify-email`,
        { email, otp },
        { withCredentials: true },
      );
      const user = res.data.user;
      set({ message: res.data.message, user: user });
    } catch (error) {
      set({ error: error.response?.data?.message || "error signing in" });
      throw error;
    }
  },
  downloadDoc: async (fileId) => {
    try {
      const res = await axios.get( `${ BASE_DOCUMENT_URL }/download/${ fileId }` )
      const fileUrl = res.data.downloadUrl;
      set( { message: res.data.message, fileUrl: fileUrl } )
      return fileUrl
    } catch (error) {
      set({ error: error.response?.data?.message || "error downloading file" });
      throw error;
    }
  }
}));

export default useAuthStore;
