import { useDispatch } from 'react-redux';
import { addExercise } from "../../../redux/actions";
import { Exercise } from "../../../redux/types";
import { useToast } from "native-base";

type SaveExercise = {
  saveExercise: (exercise: Exercise) => void;
};

const useSaveExercise = (): SaveExercise => {
    const dispatch = useDispatch();
    const toast = useToast();
    const saveExercise = (exercise: Exercise) => {
        dispatch(addExercise(exercise));
        toast.show({ description: `Successfully added ${exercise.name}` });
    };
    return {
        saveExercise: saveExercise
    }
};

export default useSaveExercise;
