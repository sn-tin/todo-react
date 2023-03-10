import React from 'react'
import { useStateContext } from '../../context/StateContextProvider';
import { CancelButton, StyledForm, StyledFormWrapper, SubmitButton } from './AddTaskForm.styles';

function AddTaskForm() {
    const { formOpen, formSubmit, newTask, changeTaskData } = useStateContext();
  return (
    <StyledFormWrapper>
        <StyledForm onSubmit={formSubmit}>
            <h2>Add New Task</h2>
            <label htmlFor="task">Task:</label>
            <input id="task" name="task" value={newTask.task} onChange={changeTaskData} required/>
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" value={newTask.dueDate} onChange={changeTaskData} required/>
            <div className="buttons">
                <CancelButton onClick={formOpen}>Cancel</CancelButton>
                <SubmitButton onClick={formSubmit}>Submit</SubmitButton>
            </div>
        </StyledForm>
    </StyledFormWrapper>
  )
}

export default AddTaskForm;