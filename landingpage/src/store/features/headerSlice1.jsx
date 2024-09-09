import { createSlice } from '@reduxjs/toolkit';
import logo from '../../assets/logo.png'
const initialState = {
  logo: logo ,  // Default logo
  projectName: 'TemplatRove',
  searchPlaceholder: 'Search',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateLogo: (state, action) => {
      state.logo = action.payload;
    },
    updateProjectName: (state, action) => {
      state.projectName = action.payload;
    },
    updateSearchPlaceholder: (state, action) => {
      state.searchPlaceholder = action.payload;
    },
  },
});

export const { updateLogo, updateProjectName, updateSearchPlaceholder } = headerSlice.actions;

export default headerSlice.reducer;
