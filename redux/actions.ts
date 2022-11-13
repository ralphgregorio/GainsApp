import { APP_COLOR_MODE } from "./types";

export const appColorMode = (isDarkMode: boolean) => ({
    type: APP_COLOR_MODE,
    payload: {
        isDarkModeEnabled: isDarkMode,
    }
});