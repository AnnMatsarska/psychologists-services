import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './auth/authSlice';
import psychologistsReducer from './psychologists/slice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { advertsReducer } from './car/carSlice';
// import { filterReducer } from './filter/filterSlice';

// const advertsConfig = {
//   key: 'adverts',
//   storage,
//   whitelist: ['favorites'],
// };

const rootReducer = combineReducers({
  //   adverts: persistReducer(advertsConfig, advertsReducer),
  //   filters: filterReducer,
  users: usersReducer,
  psychologists: psychologistsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

// export const persistor = persistStore(store);
