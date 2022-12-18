import { configureStore } from '@reduxjs/toolkit';

import { words, rank } from './reducers';

export const store = configureStore({
  reducer: {
    words,
    rank,
  },
});
