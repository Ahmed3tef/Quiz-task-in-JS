import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadDataWithBody } from '../../utils/loadData';

const initialState = {
  rank: null,
  isLoading: false,
  error: null,
};

export const loadRank = createAsyncThunk('rank/loadRank', (data, thunkAPI) =>
  loadDataWithBody(thunkAPI, 'rank', data)
);

export const rankSlice = createSlice({
  name: 'rank',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loadRank.pending, (state, action) => {
        state.rank = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadRank.fulfilled, (state, { payload }) => {
        if (payload) {
          if (!payload.rank) {
            state.rank = null;
            state.isLoading = false;
            state.error = payload.message;
            return;
          }

          state.rank = payload.rank;
          state.isLoading = false;
          state.error = null;
        }
      })
      .addCase(loadRank.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.rank = null;
        state.error = payload.response.data;
      });
  },
});

export default rankSlice.reducer;
