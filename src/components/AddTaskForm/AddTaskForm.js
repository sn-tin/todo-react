import React from 'react'
import { useStateContext } from '../../context/StateContextProvider';
import { CancelButton, StyledForm, StyledFormWrapper, SubmitButton } from './AddTaskForm.styles';

function AddTaskForm() {
    const { addTaskForm, formSubmit } = useStateContext();
  return (
    <StyledFormWrapper>
        <StyledForm onSubmit={formSubmit}>
            <h2>Add New Task</h2>
            <label htmlFor="task">Task:</label>
            <input id="task" name="task" />
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" />
            <div className="buttons">
                <CancelButton onClick={addTaskForm}>Cancel</CancelButton>
                <SubmitButton onClick={formSubmit}>Submit</SubmitButton>
            </div>
        </StyledForm>
    </StyledFormWrapper>
  )
}

export default AddTaskForm;