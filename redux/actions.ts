import { APP_COLOR_MODE } from "./types";

export const toggleColorMode = (isDarkMode: boolean) => ({
    type: APP_COLOR_MODE,
    payload: {
        isDarkModeEnabled: isDarkMode,
    }
});