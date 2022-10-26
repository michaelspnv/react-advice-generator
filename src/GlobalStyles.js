import { createGlobalStyle } from "styled-components"
import normalize from "styled-normalize"
import Manrope from "./fonts/Manrope-ExtraBold.ttf"

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: "Manrope";
    src: url(${Manrope}) format("truetype");
    font-weight: 800;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --bg-color: hsl(218, 23%, 16%);
    --card-color: hsl(217, 19%, 24%);
    --blue: hsl(217, 19%, 38%);
    --neon-green: hsl(150, 100%, 66%);
    --neon-green-shadow: rgba(82, 255, 168, 0.3);;
    --light-cyan: hsl(193, 38%, 86%);

    --fs-quote: 18px;
    --fs-quote-desktop: 28px;
  }

  p {
    margin: 0;
  }

  .page {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Manrope";
    text-align: center;
    background-color: var(--bg-color);
  }
`

export default GlobalStyles
