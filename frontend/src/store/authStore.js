import config from "@/lib/config";
import { create } from "zustand";
import axios from "axios";

const BASE_AUTH_URL = config.BASE_AUTH_URL;
const BASE_BANK_URL = config.BASE_BANK_URL;
const BASE_CUSTOMS_URL = config.BASE_CUSTOMS_URL;
const BASE_BROKER_URL = config.BASE_BROKER_URL;
const BASE_IMPORTER_URL = config.BASE_IMPORTER_URL;
const BASE_EXPORTER_URL = config.BASE_EXPORTER_URL;
const BASE_SERVICES_URL = config.BASE_SERVICES_URL;

const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  message: null,
  email: null,
  userId: null,
  error: null,

  signUp: async (email, password, role, companyName, phone, address, plan) => {
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

  sendCode: async ( email ) => {
    try {
      const res = await axios.get( `${ BASE_AUTH_URL }/send-code`, { email } )
      const userId = res.data.userId
      set({message: res.data.message, userId: userId, email: res.data.email})
    } catch (error) {
      set({ error: error.response?.data?.message || "error signing in" });
      throw error;
    }
  },

  verifyEmail: async ( email, otp ) => {
    try {
      const res = await axios.post( `${ BASE_AUTH_URL }/verify-email`,
        { email, otp },
      {withCredentials: true}
      )
      const user = res.data.user
      set({message: res.data.message, user: user})
    } catch (error) {
      set({ error: error.response?.data?.message || "error signing in" });
      throw error;
    }
  },
}));

export default useAuthStore;
