import { useSelector } from 'react-redux';
import { listExercises } from "../../../redux/selectors";
import { Exercise } from "../../../redux/types";
import { useMemo } from "react";

type Exercises = {
    exercises: Array<Exercise>;
};
const useListExercise = (): Exercises => {
    const exercises = useSelector(listExercises);
    return useMemo( () => ({
        exercises
    }), [exercises])
};

export default useListExercise;
