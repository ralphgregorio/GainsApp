const APP_COLOR_MODE = "app/colorMode";

enum Gains {
    EXERCISE = "gains/exercise",
    WORKOUT = "gains/workout"
}

type Exercise = {
    id: string,
    name: string,
    category: string,
    bodyPart: string,
    description: string,
    url: string,
    type: Gains.EXERCISE
}
type Workout = {
    id: string,
    name: string,
    sets: number,
    reps: number,
    duration: number,
    timestamp: string,
    exercise: Exercise,
    type: Gains.WORKOUT
}

export {
    APP_COLOR_MODE,
    Gains,
    Exercise,
    Workout
};
