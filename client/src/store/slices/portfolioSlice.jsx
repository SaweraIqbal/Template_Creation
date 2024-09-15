// In portfolioSlice.js
import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    heroTitle: 'I have Creative Design Experience',
    heroDescription: "I'm Tanvir, a creative Product Designer. I've been helping businesses to solve their problems with my design for 2 years.",
    contactButtonText: 'Contact Me',
    portfolioButtonText: 'View Portfolio',
    whyHireHeading: 'Why Hire Me For Your Next Project?',
    whyHireDescription: "I'm a specialist in UI/UX Design. My passion is designing & solving problems through user experience and research.",
    hireMeButtonText: 'Hire Me',
    skills: [
      { title: 'Visual Design', description: 'Create user interface design with unique & modern ideas.', icon: '💎' },
      { title: 'UX Research', description: 'Create digital user products with updated ideas.', icon: '🔬' }
    ],
    stats: {
      satisfiedClients: { number: '80+', label: 'Satisfied clients' },
      projectsCompleted: { number: '200+', label: 'Projects completed' },
      reviewsGiven: { number: '99+', label: 'Reviews given' }
    }
  },
  reducers: {
    setHeroTitle: (state, action) => { state.heroTitle = action.payload; },
    setHeroDescription: (state, action) => { state.heroDescription = action.payload; },
    setContactButtonText: (state, action) => { state.contactButtonText = action.payload; },
    setPortfolioButtonText: (state, action) => { state.portfolioButtonText = action.payload; },
    setWhyHireHeading: (state, action) => { state.whyHireHeading = action.payload; },
    setWhyHireDescription: (state, action) => { state.whyHireDescription = action.payload; },
    setHireMeButtonText: (state, action) => { state.hireMeButtonText = action.payload; },
    setSkill: (state, action) => {
      const { index, title, description } = action.payload;
      state.skills[index] = { ...state.skills[index], title, description };
    },
    setSkillIcon: (state, action) => {
      const { index, icon } = action.payload;
      state.skills[index] = { ...state.skills[index], icon };
    },
    setStat: (state, action) => {
      const { statKey, number, label } = action.payload;
      state.stats[statKey] = { number, label };
    }
  }
});

export const {
  setHeroTitle,
  setHeroDescription,
  setContactButtonText,
  setPortfolioButtonText,
  setWhyHireHeading,
  setWhyHireDescription,
  setHireMeButtonText,
  setSkill,
  setSkillIcon,
  setStat
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
