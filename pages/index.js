import styled, { injectGlobal } from 'styled-components';

export default () => <App>Simple voter</App>;

const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background-color: #f1f1f1;

  height: calc(100vh - 6rem);
  width: calc(100vw - 6rem);

  margin: 3rem auto;
`;

injectGlobal`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    vertical-align: middle;
    font-family: inherit;
    box-sizing: inherit;
    font-weight: inherit;
  }
  ul {
    list-style: none;
  }
  html {
    font-size: 62.5%;
  }
  button {
    font-family: sans-serif;
    font-size: 1.6rem;
  }
  body {
    color: ${props => props.theme.black};
    font-family: sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.4px;
    box-sizing: border-box;
  }
`;
