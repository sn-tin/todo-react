import styled from "styled-components";
import { darkTheme } from "../../styles/GlobalStyles";

const StyledNav = styled.nav`
    color: ${darkTheme.text};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;
    padding-bottom: 20px;
    border-bottom: 1px solid ${darkTheme.lineColor};
    .title-logo {
        font-weight: 600;
        font-size: clamp(1.5rem, 2.5vw, 2.188rem);
        text-transform: uppercase;
    }
    .logout {
        display: flex;
        justify-content: center;
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        line-height: 1.2;
        gap: 10px;
    }
`

export { StyledNav }