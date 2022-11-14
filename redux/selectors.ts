import { State } from "./store";
import {
    Exercise
} from "./types";

export const getIsDarkModeEnabled = (state: State): boolean => {
    return state.appReducer.colorMode.isDarkModeEnabled;
}

export const listExercises = (state: State): Array<Exercise> => {
    return state.appReducer.exercise;
}
