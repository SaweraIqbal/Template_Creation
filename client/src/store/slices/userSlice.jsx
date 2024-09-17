// userSlice.js (or your existing user slice)
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  email: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.username = null;
      state.token = null;
      state.email = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
