import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: null,
    email: null,
    token: null,
    profilePic: null,
    id: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.profilePic = action.payload.profilePic;
      state.id = action.payload.id;
    },
    logout: (state) => {
      state.username = null;
      state.token = null;
      state.email = null;
      state.profilePic = null;
      state.id = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
