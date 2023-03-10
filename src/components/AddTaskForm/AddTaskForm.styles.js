import { style } from "@mui/system";
import styled from "styled-components";
import { darkTheme } from "../../styles/GlobalStyles";
import { StyledAddButton } from "../Todo/Todo.styles";

const StyledFormWrapper = styled.div`
    color: ${darkTheme.text};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(106, 104, 104, 0.77);
    z-index: 10000;
`
const StyledForm = styled.form`
    width: 80%;
    max-width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${darkTheme.primary};
    box-shadow: 0px 0px 15px 10px rgba(45, 45, 45, 0.25);
    border-radius: 20px;
    padding: 50px 30px;
    h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    label {
        font-weight: 500;
        font-size: clamp(1rem, 2.5vw, 1.1rem);
        margin: 20px auto 0;
    }
    input {
        width: 100%;
        height: 40px;
        background: #F6EFF9;
        border: 1px solid ${darkTheme.whitishPurple};
        border-radius: 8px;
        padding: 0 10px;
        margin: 10px auto 20px;
    }
    .buttons {
        display: flex;
        gap: 20px;
        margin-top: 30px;
    }
`
const CancelButton = styled.button`
    width: 50%;
    height: 40px;
    font-weight: 600;
    font-size: clamp(0.8rem,2.5vw,1rem);
    background-color: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 10px;
`
const SubmitButton = styled(CancelButton)`
    color: #FFFFFF;
    background-color: ${darkTheme.violet};
`
export { StyledFormWrapper, StyledForm, CancelButton, SubmitButton }