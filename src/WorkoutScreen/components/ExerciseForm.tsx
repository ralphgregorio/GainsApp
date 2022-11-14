import React, { ReactElement } from "react";
import {
    FormControl,
    Input,
    Modal,
    Select
} from "native-base";
import { Exercise, ExerciseCategory, BodyPart } from "../../../redux/types";
import { Errors } from "./CreateExerciseModal";

type Props = {
    formData: Exercise;
    setData: (exercise: Exercise) => void;
    errors: Errors;
}
export function ExerciseForm({ formData, setData, errors }: Props): ReactElement<typeof Modal> {
    return (
        <>
            <FormControl isRequired isInvalid={'nameError' in errors}>
                <FormControl.Label>Name</FormControl.Label>
                <Input onChangeText={value => setData({ ...formData, name: value})}/>
                {'nameError' in errors ?
                    <FormControl.ErrorMessage>{errors.nameError}</FormControl.ErrorMessage> :
                    <FormControl.HelperText>
                        Select the category of your exercise
                    </FormControl.HelperText>
                }
            </FormControl>
            <FormControl mt="3" isRequired isInvalid={'categoryError' in errors}>
                <FormControl.Label>Category</FormControl.Label>
                <Select onValueChange={value => setData({ ...formData, category: value})}>
                    {(Object.values(ExerciseCategory)).map(
                        (key) => {
                            return <Select.Item key={key} label={key} value={key} />
                    })}
                </Select>
                {'categoryError' in errors ?
                    <FormControl.ErrorMessage>{errors.categoryError}</FormControl.ErrorMessage> :
                    <FormControl.HelperText>
                        Select the category of your exercise
                    </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'bodyPartError' in errors}>
                <FormControl.Label>Body Part</FormControl.Label>
                <Select onValueChange={value => setData({ ...formData, bodyPart: value})}>
                    {(Object.values(BodyPart)).map(
                        (key) => {
                            return <Select.Item key={key} label={key} value={key} />
                        })}
                </Select>
                {'bodyPartError' in errors ?
                    <FormControl.ErrorMessage>{errors.bodyPartError}</FormControl.ErrorMessage> :
                    <FormControl.HelperText>
                        Select body part exercise will be hitting
                    </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'descriptionError' in errors}>
                <FormControl.Label>Description</FormControl.Label>
                <Input onChangeText={value => setData({ ...formData, description: value})}/>
                {'descriptionError' in errors ?
                    <FormControl.ErrorMessage>{errors.descriptionError}</FormControl.ErrorMessage> :
                    <FormControl.HelperText>
                        Enter the description of your exercise
                    </FormControl.HelperText>
                }
            </FormControl>
        </>
    );
}
