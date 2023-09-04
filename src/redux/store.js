import { configureStore } from '@reduxjs/toolkit';
import capsulesReducer from './capsules/capsulesSlice';

const store = configureStore({
  reducer: {
    capsules: capsulesReducer,
  },
});

export default store;
