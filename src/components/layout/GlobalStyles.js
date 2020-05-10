import { css } from '@emotion/core';

const globalTheme = ({ theme }) => css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    font-family: sans-serif;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  html,
  body {
    width: 100vw;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    margin: 0;
    padding: 0;
  }
  #page-container {
    padding: 0 1em;
    min-height: calc(var(--vh, 1vh) * 100);
    @media screen and (max-width: 600px) {
      padding: 0 0.5em;
    }
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden],
  template {
    display: none;
  }
  a {
    color: ${theme.colors.black.blue};
    transition: color 0.5s;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: ${theme.colors.primary.light};
  }
  hgroup,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  h1 {
    font-family: ${theme.fontFamily.heading};
  }
  select,
  input {
    font-size: 16px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  table {
    margin: 0;
    padding: 0;
    border: none;
    td {
      border-top: 1px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`;

export default globalTheme;
