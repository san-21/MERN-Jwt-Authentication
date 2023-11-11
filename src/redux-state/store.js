import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "./auth/authReducer";
import authModalReducer from "./auth/authModal";
import storage from "redux-persist/lib/storage";
import authenticatedReducer from "./auth/auththenticateReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth", "authenticated"],
};
const rootReducer = combineReducers({
  auth: authReducer,
  authModal: authModalReducer,
  authenticated: authenticatedReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
