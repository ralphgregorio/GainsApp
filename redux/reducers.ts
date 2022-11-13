import { APP_COLOR_MODE } from "./types";
import {AnyAction} from "redux";

const initialState = {
    colorMode: {
        isDarkModeEnabled: false
    }
};

const appColorModeReducer = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case APP_COLOR_MODE: {
            const { isDarkModeEnabled } = action.payload
            return {
                ...state,
                colorMode: {
                    ...state.colorMode,
                    isDarkModeEnabled: isDarkModeEnabled
                }
            }
        }
        default:
            return state;
    }
}

export {
    appColorModeReducer
};