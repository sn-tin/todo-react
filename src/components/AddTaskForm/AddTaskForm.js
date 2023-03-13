import React from 'react'
import { useStateContext } from '../../context/StateContextProvider';
import { CancelButton, StyledForm, StyledFormWrapper, SubmitButton } from './AddTaskForm.styles';

function AddTaskForm() {
    const { formOpen, formSubmit, task, changeTaskData } = useStateContext();
  return (
    <StyledFormWrapper>
        <StyledForm onSubmit={formSubmit}>
            <h2>Add New Task</h2>
            <label htmlFor="task">Task:</label>
            <input id="task" name="task" value={task?.task} onChange={changeTaskData} required/>
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" value={task?.dueDate} onChange={changeTaskData} required/>
            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" name="comment" value={task?.comment} onChange={changeTaskData} required/>
            <div className="buttons">
                <CancelButton onClick={formOpen}>Cancel</CancelButton>
                <SubmitButton onClick={formSubmit}>Submit</SubmitButton>
            </div>
        </StyledForm>
    </StyledFormWrapper>
  )
}

export default AddTaskForm;