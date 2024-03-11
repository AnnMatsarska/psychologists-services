import { createSlice } from '@reduxjs/toolkit';

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState: [],
  reducers: {
    setPsychologists: (_, action) => {
      return action.payload;
    },
  },
});

export const { setPsychologists } = psychologistsSlice.actions;

export const selectPsychologists = state => state.psychologists;

export default psychologistsSlice.reducer;
