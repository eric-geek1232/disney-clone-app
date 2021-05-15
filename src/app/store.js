import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice'
import userReducer from '../features/User/UserSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
});
