import { APP_COLOR_MODE, Gains } from "./types";
import { AnyAction } from "redux";

const initialState = {
    colorMode: {
        isDarkModeEnabled: false
    },
    exercise: [
        {
            id: '11edc52b-2918-4d71-9058-f7285e29d894',
            name: 'Bench Press - Dumbbell',
            category: 'Dumbbell',
            bodyPart: 'Chest',
            description: 'Something',
            url: 'null',
            type: Gains.EXERCISE
        }
    ]
};

const gainsAppReducer = (
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
        case Gains.EXERCISE: {
            const { exercise } = action.payload
            return {
                ...state,
                exercise: [
                    ...state.exercise,
                    exercise
                ]
            }
        }
        default:
            return state;
    }
}

export {
    gainsAppReducer
};
