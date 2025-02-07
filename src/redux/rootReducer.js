import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const rootPercistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
}

const rootReducer = combineReducers({
    // todo create and map reducer
});

export {rootPercistConfig, rootReducer};