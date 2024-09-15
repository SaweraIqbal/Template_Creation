// redux/slices/homePageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editMode: false,
  title: 'My Website',
  navItems: ['Home', 'Products', 'Contact Us', 'Setting'],
  heroText: 'Get started with new ideas',
  heroSubText: 'Try a free trial and explore the best solutions for your business.',
  buttonText: 'Try Now',
  footerText: [
    { title: 'Services', items: ['Web Design', 'SEO Optimization', 'Digital Marketing'] },
    { title: 'Company', items: ['About Us', 'Our Team', 'Careers'] },
    { title: 'Support', items: ['Contact Us', 'FAQs', 'Help Center'] },
  ],
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    toggleEditMode: (state) => {
      state.editMode = !state.editMode;
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateNavItems: (state, action) => {
      const { index, value } = action.payload;
      state.navItems[index] = value;
    },
    updateHeroText: (state, action) => {
      state.heroText = action.payload;
    },
    updateHeroSubText: (state, action) => {
      state.heroSubText = action.payload;
    },
    updateButtonText: (state, action) => {
      state.buttonText = action.payload;
    },
    updateFooterText: (state, action) => {
      const { columnIndex, itemIndex, value } = action.payload;
      state.footerText[columnIndex].items[itemIndex] = value;
    },
  },
});

export const {
  toggleEditMode,
  updateTitle,
  updateNavItems,
  updateHeroText,
  updateHeroSubText,
  updateButtonText,
  updateFooterText,
} = homePageSlice.actions;

export default homePageSlice.reducer;
