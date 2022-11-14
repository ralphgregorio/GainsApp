import React, {ReactElement, useState} from "react";
import {
    Modal,
    Button, useToast,
} from "native-base";
import { ExerciseForm } from "./ExerciseForm";
import {Exercise, Gains} from "../../../redux/types";
import useSaveExercise from "../hooks/useSaveExercise";
import uuid from "react-native-uuid";

export type Errors = {
    nameError?: string;
    bodyPartError?: string;
    categoryError?: string;
    descriptionError?: string;
};
type Props = {
    isOpen: boolean;
    onClose: (showModal: boolean) => void;
};

export function CreateExerciseModal({ isOpen, onClose }: Props): ReactElement<typeof Modal> {
    const toast = useToast();
    const [formData, setData] = useState<Exercise>({
        id: "",
        bodyPart: "",
        category: "",
        description: "",
        name: "",
        type: Gains.EXERCISE,
        url: ""
    });
    const [errors, setErrors] = React.useState<Errors>({});
    const { saveExercise } = useSaveExercise();
    const validate = (): boolean => {
        if (!formData.name) {
            setErrors({
                ...errors,
                nameError: 'Error: Please add a name'
            });
            return false;
        }
        if (!formData.category) {
            if ('nameError' in errors) {
                setErrors(current => {
                    const errorCopy = {...current};
                    delete errorCopy['nameError'];
                    return errorCopy;
                })
            }
            setErrors({
                ...errors,
                categoryError: 'Error: Please select a valid category'
            });
            return false;
        }
        if (!formData.bodyPart) {
            if ('categoryError' in errors) {
                setErrors(current => {
                    const errorCopy = {...current};
                    delete errorCopy['categoryError'];
                    return errorCopy;
                })
            }
            setErrors({
                ...errors,
                bodyPartError: 'Error: Please select a valid body part'
            });
            return false;
        }
        if (!formData.description) {
            if ('bodyPartError' in errors) {
                setErrors(current => {
                    const errorCopy = {...current};
                    delete errorCopy['bodyPartError'];
                    return errorCopy;
                })
            }
            setErrors({
                ...errors,
                descriptionError: 'Error: Please add a description'
            });
            return false;
        }

        if ('descriptionError' in errors) {
            setErrors(current => {
                const errorCopy = {...current};
                delete errorCopy['descriptionError'];
                return errorCopy;
            })
        }
        return true;
    };
    const onSubmit = () => {
        const isDataValid = validate();
        if (isDataValid) {
            setData({
                ...formData,
                id: uuid.v4().toString()
            });
            saveExercise(formData);
            onClose(false);
        } else {
            toast.show({description: "Please check errors and try again", placement: "top"})
        }
    };
    return (
        <Modal isOpen={isOpen} onClose={() => onClose(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Add your Exercise</Modal.Header>
                <Modal.Body>
                    <ExerciseForm formData={formData} setData={setData} errors={errors} />
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            onClose(false);
                        }}>
                            Cancel
                        </Button>
                        <Button onPress={onSubmit}>
                            Add Exercise
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}
