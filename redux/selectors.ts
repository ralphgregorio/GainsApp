import { State } from "./store";

export const getIsDarkModeEnabled = (state: State): boolean => {
    return state.colorReducer.colorMode.isDarkModeEnabled;
}