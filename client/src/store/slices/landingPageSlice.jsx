// src/slices/landingPageSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Your Title',
  navItems: {
    home: 'Home',
    products: 'Products',
    contactUs: 'Contact Us',
    login: 'Login',
    signUp: 'Sign Up',
  },
  headline: 'Your Catchy Headline',
  paragraph: 'Some compelling text to engage users and explain what you offer.',
  buttonText: 'Free Trial',
  footerItems: {
    logout: 'Logout',
    cookies: 'Cookies',
    more: 'More',
    about: 'About',
  },
  isEditing: false,
};

const landingPageSlice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {
    toggleEdit: (state) => {
      state.isEditing = !state.isEditing;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setNavItem: (state, action) => {
      const { key, value } = action.payload;
      state.navItems[key] = value;
    },
    setHeadline: (state, action) => {
      state.headline = action.payload;
    },
    setParagraph: (state, action) => {
      state.paragraph = action.payload;
    },
    setButtonText: (state, action) => {
      state.buttonText = action.payload;
    },
    setFooterItem: (state, action) => {
      const { key, value } = action.payload;
      state.footerItems[key] = value;
    },
  },
});

export const {
  toggleEdit,
  setTitle,
  setNavItem,
  setHeadline,
  setParagraph,
  setButtonText,
  setFooterItem,
} = landingPageSlice.actions;

export default landingPageSlice.reducer;
