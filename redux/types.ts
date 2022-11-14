const APP_COLOR_MODE = "app/colorMode";

enum Gains {
    EXERCISE = "gains/exercise",
    WORKOUT = "gains/workout"
}

enum ExerciseCategory {
    BARBELL = "Barbell",
    DUMBBELL = "Dumbbell",
    MACHINE_OR_OTHER = "Machine / Other",
    WEIGHTED_BODYWEIGHT = "Weighted Bodyweight",
    ASSISTED_BODYWEIGHT = "Assisted Bodyweight",
    REPS_ONLY = "Reps Only",
    CARDIO = "Cardio",
    DURATION = "Duration"
}

enum BodyPart {
    CORE = "Core",
    ARMS = "Arms",
    BACK = "Back",
    CHEST = "Chest",
    LEGS = "Legs",
    SHOULDERS = "Shoulders",
    OTHER = "Other",
    OLYMPIC = "Olympic",
    FULL_BODY = "Full Body",
    CARDIO = "Cardio"
}

type Exercise = {
    id: string;
    name: string;
    category: string;
    bodyPart: string;
    description: string;
    url?: string;
    type: Gains.EXERCISE;
}
type Workout = {
    id: string;
    name: string;
    weight: number;
    sets: number;
    reps: number;
    duration: number;
    timestamp: string;
    exercise: Exercise;
    type: Gains.WORKOUT;
}

export {
    APP_COLOR_MODE,
    Gains,
    Exercise,
    Workout,
    BodyPart,
    ExerciseCategory
};
