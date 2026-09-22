// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Thunk for login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://edu-hawk-server.onrender.com/api/auth/login",
        credentials,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      return response.data;
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Login failed. Please try again.";
      return rejectWithValue(message);
    }
  },
);

export const restoreSession = createAsyncThunk(
  "auth/restoreSession",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://edu-hawk-server.onrender.com/api/auth/me",
        {
          withCredentials: true,
        },
      );
      return response.data;
    } catch (err) {
      if (err.response?.status === 401) {
        try {
          await axios.post(
            "https://edu-hawk-server.onrender.com/api/auth/refresh",
            {},
            { withCredentials: true },
          );
          const refreshedResponse = await axios.get(
            "https://edu-hawk-server.onrender.com/api/auth/me",
            { withCredentials: true },
          );
          return refreshedResponse.data;
        } catch (refreshErr) {
          return rejectWithValue(
            refreshErr.response?.data?.message || "Session expired",
          );
        }
      }

      return rejectWithValue(err.response?.data?.message || "Session expired");
    }
  },
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await axios.post(
    "https://edu-hawk-server.onrender.com/api/auth/logout",
    {},
    { withCredentials: true },
  );
});

const initialState = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  authChecked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.authChecked = true;
      state.error = null;
    },
    // You can add more reducers if needed (clearError, etc.)
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.user = action.payload.user || null;
        state.isAuthenticated = true;
        state.authChecked = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(restoreSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user || null;
        state.isAuthenticated = true;
        state.authChecked = true;
      })
      .addCase(restoreSession.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.authChecked = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.authChecked = true;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.authChecked = true;
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
