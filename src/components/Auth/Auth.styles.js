import styled from "styled-components"
import { StyledForm, SubmitButton } from "../AddTaskForm/AddTaskForm.styles"

const StyledAuth = styled(StyledForm)`
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
    margin: 50px auto;
    p {
        margin-bottom: 15px;
    }
    input {
        border: 1px solid #000000;
        margin: 15px auto 0;
    }
`
const AuthBtn = styled(SubmitButton)`
    width: 100%;
    margin: 30px auto 15px;
`

export { StyledAuth, AuthBtn }