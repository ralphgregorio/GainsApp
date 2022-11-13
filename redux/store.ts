import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'
import { gainsAppReducer } from "./reducers";
import { Exercise } from "./types";

type appState = {
    colorMode: {
        isDarkModeEnabled: boolean
    }
    exercise: Array<Exercise>
}

const reducers = combineReducers({
    appReducer: gainsAppReducer
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
export type State = {
    appReducer: appState
}
