import {
    APP_COLOR_MODE,
    Exercise,
    Gains
} from "./types";

export const toggleColorMode = (isDarkMode: boolean) => ({
    type: APP_COLOR_MODE,
    payload: {
        isDarkModeEnabled: isDarkMode,
    }
});

export const addExercise = (exercise: Exercise) => ({
    type: Gains.EXERCISE,
    payload: {
        exercise: exercise,
    }
});
