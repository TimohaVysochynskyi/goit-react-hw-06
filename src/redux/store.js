import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
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
import storage from "redux-persist/lib/storage";

const persistedContactsReducer = persistReducer(
  {
    key: "contacts",
    storage,
    whitelist: "items",
  },
  contactsReducer
);

const persistedFilterReducer = persistReducer(
  {
    key: "filterValue",
    storage,
    whitelist: ["name"],
  },
  filterReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filter.name;

export const persistor = persistStore(store);
