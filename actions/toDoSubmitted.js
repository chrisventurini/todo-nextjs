export const TO_DO_SUBMITTED = 'TO_DO_SUBMITTED';

export const toDoSubmitted = (toDo) => {
    return {
        type: TO_DO_SUBMITTED,
        toDo
    }
};