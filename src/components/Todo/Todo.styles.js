import styled from "styled-components";
import { darkTheme } from "../../styles/GlobalStyles";

const StyledTodo = styled.section`
    width: 100%;
    max-width: 650px;
    h1 {
        color: ${darkTheme.text};
        font-size: clamp(2.5rem, 2.5vw, 3.75rem);
        font-weight: 700;
    }
    p {
        color: ${darkTheme.text};
        font-size: clamp(1rem, 2.5vw, 1.25rem);
    }
    @media screen and (min-width: 900px) {
        transform: translateX(35%);
    }
`
const StyledAddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 50px;
    color: ${darkTheme.text};
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    font-weight: 600;
    background-color: #A446E6;
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 50px auto 20px;
`
const StyledTaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${darkTheme.secondary};
    padding: 20px;
    border-radius: 15px;
    @media screen and (min-width: 900px) {
        padding: 25px;
    }
`
const StyledTask = styled.div`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 5px rgba(73, 73, 73, 0.25);
    border-radius: 8px;
    padding: 20px;
    .options {
        display: inline-flex;
        gap: 5px;
        margin-left: auto;
        svg {
            width: 20px;
            cursor: pointer;
        }
    }
    @media screen and (min-width: 900px) {
        padding: 20px 30px;
        .options {
            gap: 10px;
            display: inline-flex;
            gap: 10px;
            margin-left: auto;
            svg {
                width: 25px;
            }
        }
    }
`
const TaskDetails = styled.div`
    margin-left: 20px;
    .task {
        color: #000000;
        font-weight: 400;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        line-height: 22px;
    }
    .due, .comment {
        color: ${darkTheme.subText};
        font-size: clamp(0.8rem, 2.5vw, 1rem);
    }
    .comment {
        font-size: clamp(0.6rem, 2.5vw, 0.8rem);
    }
    @media screen and (min-width: 900px) {
        margin-left: 20px;
    }
`
export { StyledTodo, StyledAddButton, StyledTaskWrapper, StyledTask, TaskDetails }