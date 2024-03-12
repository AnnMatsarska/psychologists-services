import { createSlice } from '@reduxjs/toolkit';

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState: {
    data: [],
    currentPage: 1,
    itemsPerPage: 3,
  },
  reducers: {
    setPsychologists: (state, action) => {
      state.data = action.payload;
    },
    nextPage: state => {
      state.currentPage += 1;
    },
  },
});

export const { setPsychologists, nextPage } = psychologistsSlice.actions;

export const selectPsychologists = state => state.psychologists.data;
export const selectCurrentPage = state => state.psychologists.currentPage;
export const selectItemsPerPage = state => state.psychologists.itemsPerPage;

export default psychologistsSlice.reducer;
