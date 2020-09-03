import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%; /* 1rem = 10px */
}
html,
body,
#root {
  background: #0D0814;
  color: #f5f5fc;
  min-width: 100%;
  height: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
}
body,
input,
button {
  font: 1.6rem sans-serif;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  color: #FFCC73;
}
li {
  list-style: none;
}
button {
  cursor: pointer;
}
`
