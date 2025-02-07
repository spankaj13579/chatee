import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootPercistConfig, rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: persistReducer(rootPercistConfig, rootReducer),
  middleware: (getDefaultMiddlewear) => getDefaultMiddlewear({
      serializableCheck: false,
      immutableCheck: false,
    })
});

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, persistor, dispatch, useSelector, useDispatch };
