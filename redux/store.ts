import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'
import { appColorModeReducer } from "./reducers";

const reducers = combineReducers({
    colorReducer: appColorModeReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});
export const persistor = persistStore(store);
