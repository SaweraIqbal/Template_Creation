// src/slices/faqSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faqs: [
    { question: "Service Hours", answer: "Our service hours are Mon – Fri 10 am – 8 pm, Sat, Sun Closed." },
    { question: "Shipping and Handling", answer: "We offer standard and expedited shipping options. Handling time is typically 1-2 business days." },
    { question: "Product Details", answer: "All product details are available on the respective product pages, including specifications and features." },
    { question: "Return Policies", answer: "Returns are accepted within 30 days of purchase. Please refer to our return policy page for more details." },
  ],
  isEditing: false, // Global edit mode
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    toggleEditMode: (state) => {
      state.isEditing = !state.isEditing;
    },
    updateFAQ: (state, action) => {
      const { index, question, answer } = action.payload;
      state.faqs[index] = { question, answer };
    },
  },
});

export const { toggleEditMode, updateFAQ } = faqSlice.actions;
export default faqSlice.reducer;
