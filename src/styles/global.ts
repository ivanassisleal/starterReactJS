import { createGlobalStyle } from 'styled-components';

import "bootstrap/dist/css/bootstrap.css";

export const GlobalStyle = createGlobalStyle`

:root {
    --background :#f9f2f5;
}

* {
    margin:0;
    padding:0%;
    box-sizing:border-box;
}

body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`