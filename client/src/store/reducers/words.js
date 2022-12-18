import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadData } from '../../utils/loadData';

const initialState = {
  words: [],
  isLoading: false,
  error: null,
};

export const loadWords = createAsyncThunk('words/loadWords', thunkAPI =>
  loadData(thunkAPI, 'words')
);

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loadWords.pending, (state, action) => {
        state.words = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadWords.fulfilled, (state, { payload }) => {
        if (payload) {
          if (!payload.data) {
            state.words = [];
            state.isLoading = false;
            state.error = payload.message;
            return;
          }

          state.words = payload.data;
          state.isLoading = false;
          state.error = null;
        }
      })
      .addCase(loadWords.rejected, (state, action) => {
        state.isLoading = false;
        state.words = null;
        state.error = payload.response.data;
      });
  },
});

export default wordsSlice.reducer;
