import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;
export const COLORS = {
    primary: '#3F51B5',
    whiteBackground: '#FFF',
    greyBackground: '#E5E5E5'


};
export function mediaQuery(pixels: number) {
    return `@media (max-width: ${pixels}px)`;
}

export default GlobalStyle;
