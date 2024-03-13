import { createSlice } from '@reduxjs/toolkit';

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState: {
    data: [],
    currentPage: 1,
    itemsPerPage: 3,
    filter: ' ',
    favorites: [],
  },
  reducers: {
    setPsychologists: (state, action) => {
      state.data = action.payload;
    },
    nextPage: state => {
      state.currentPage += 1;
    },
    resetStateCars: state => {
      state.data = [];
      state.currentPage = 1;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const {
  setPsychologists,
  nextPage,
  resetStateCars,
  setFilter,
  addFavorite,
  deleteFavorite,
} = psychologistsSlice.actions;

export const selectPsychologists = state => state.psychologists.data;
export const selectCurrentPage = state => state.psychologists.currentPage;
export const selectItemsPerPage = state => state.psychologists.itemsPerPage;
export const selectFilter = state => state.psychologists.filter;
export const selectFavorites = state => state.psychologists.favorites;

export default psychologistsSlice.reducer;
