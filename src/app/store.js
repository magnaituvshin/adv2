
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { adviceApi } from '../services/adviceApi';

const store = configureStore({
  reducer: {
    [adviceApi.reducerPath]: adviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adviceApi.middleware),
});

setupListeners(store.dispatch);

export default store;
