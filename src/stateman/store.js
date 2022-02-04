import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productsReducer } from "./reducer";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['search']
  }

const persistedReducer = persistReducer(persistConfig, productsReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }