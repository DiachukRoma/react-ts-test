import { configureStore } from '@reduxjs/toolkit';
import weather from './weather';

const store = configureStore({
  reducer: {
    todos: weather,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
