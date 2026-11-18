// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const STORAGE_KEY = "eduhawk_admin_user";
const TOKEN_KEY = "eduhawk_admin_token";

const getSavedSession = () => {
  try {
    const rawUser = localStorage.getItem(STORAGE_KEY);
    const rawToken = localStorage.getItem(TOKEN_KEY);
    return {
      user: rawUser ? JSON.parse(rawUser) : null,
      token: rawToken || null,
    };
  } catch {
    return { user: null, token: null };
  }
};

const persistSession = (user, token) => {
  try {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    if (token) localStorage.setItem(TOKEN_KEY, token);
  } catch (err) {
    console.error("Failed to persist session to localStorage", err);
  }
};

const clearPersistedSession = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TOKEN_KEY);
  } catch (err) {
    console.error("Failed to clear persisted session", err);
  }
};

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
    const { token, user: localUser } = getSavedSession();
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await axios.get(
        "https://edu-hawk-server.onrender.com/api/auth/me",
        {
          headers,
          withCredentials: true,
        },
      );
      return response.data;
    } catch (err) {
      // If we already have a validated local user, preserve the session
      if (localUser) {
        return { user: localUser, fromStorage: true };
      }

      if (err.response?.status === 401) {
        try {
          await axios.post(
            "https://edu-hawk-server.onrender.com/api/auth/refresh",
            {},
            { headers, withCredentials: true },
          );
          const refreshedResponse = await axios.get(
            "https://edu-hawk-server.onrender.com/api/auth/me",
            { headers, withCredentials: true },
          );
          return refreshedResponse.data;
        } catch (refreshErr) {
          clearPersistedSession();
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
  const { token } = getSavedSession();
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    await axios.post(
      "https://edu-hawk-server.onrender.com/api/auth/logout",
      {},
      { headers, withCredentials: true },
    );
  } finally {
    clearPersistedSession();
  }
});

const savedSession = getSavedSession();

const initialState = {
  token: savedSession.token,
  user: savedSession.user,
  isLoading: false,
  error: null,
  isAuthenticated: !!savedSession.user,
  authChecked: !!savedSession.user,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload) {
        persistSession(action.payload, state.token);
      }
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.authChecked = true;
      state.error = null;
      clearPersistedSession();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const user = action.payload.user || null;
        const token = action.payload.token || null;
        state.token = token;
        state.user = user;
        state.isAuthenticated = true;
        state.authChecked = true;
        persistSession(user, token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(restoreSession.pending, (state) => {
        if (!state.user) {
          state.isLoading = true;
        }
      })
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.isLoading = false;
        const user = action.payload.user || state.user;
        state.user = user;
        state.isAuthenticated = !!user;
        state.authChecked = true;
        if (user && !action.payload.fromStorage) {
          persistSession(user, state.token);
        }
      })
      .addCase(restoreSession.rejected, (state) => {
        state.isLoading = false;
        const { user: localUser } = getSavedSession();
        if (!localUser) {
          state.user = null;
          state.token = null;
          state.isAuthenticated = false;
        }
        state.authChecked = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.authChecked = true;
        clearPersistedSession();
      })
      .addCase(logoutUser.rejected, (state) => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.authChecked = true;
        clearPersistedSession();
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
