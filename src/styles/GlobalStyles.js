import { createGlobalStyle } from "styled-components";

// const lightTheme = {
//     primary: "#FFFFFF",
//     secondary: "#EEE6F1",
//     text: "#000000",
//     subText: "#6C6C6C",
//     shadow: "0px 0px 4px 5px rgba(227, 227, 227, 0.25)",
// }

const darkTheme = {
    primary: "#393053",
    secondary: "#635985",
    text: "#FFFFFF",
    subText: "#6C6C6C",
    shadow: "0px 0px 4px 5px rgba(73, 73, 73, 0.25)",
    lineColor: "#D5D4D6",
    violet: "#A446E6",
    whitishPurple: "#F6EFF9",
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
    p {
        margin: 0;
        padding: 0;
    }
    body {
        font: 16px 'Poppins', sans-serif;
        background-color: ${darkTheme.primary}
    }
    button, input[type="checkbox"] {
        cursor: pointer;
    }
    .App {
        width: 100%;
        max-width: 1220px;
        margin: auto;
        padding: 0 20px;
        @media screen and (min-width: 900px) {
            padding: 0 50px;
        }
    }
`

export { GlobalStyles, darkTheme }