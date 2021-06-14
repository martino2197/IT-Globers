import { createGlobalStyle } from 'styled-components'

// ------------------------------ import variables
import { colors, fonts } from './Variables'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
html {
  box-sizing: border-box;
  /* font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,  'Helvetica Neue', sans-serif; */
  font-family: ${fonts.family};
  }
  *, *::before, *::after {
  box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    ${'' /* padding: 0; */}
  }

  h1, h2 {
    font-size: 30px;
    line-height: 30px;
    font-weight: 300;
    color: ${colors.headerColor};
    
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    background: ${colors.primaryBackgroundColor};
    border: 0;
    outline: 0;
  }

  body {
    background: ${colors.mainBackgroundColor};
    height: 100vh;
    margin: 0 auto;
    ${'' /* max-width: 500px; */}
    ${'' /* overscroll-behavior: none; */}
    width: 100%;
    color: ${colors.secondaryColor};
  }

  #app {
    background: ${colors.mainBackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: auto;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
