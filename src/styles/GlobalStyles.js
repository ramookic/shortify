import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Brand */
  --color-brand-50: #e3f2fd;
  --color-brand-100: #bbdefb;
  --color-brand-500: #2196f3;
  --color-brand-600: #1e88e5;
  --color-brand-700: #1976d2;
  --color-brand-800: #1565c0;

  /* Grey */
  --color-grey-0: #ffffff;
  --color-grey-100: #f8f9fa;
  --color-grey-200: #f4f4f5;
  --color-grey-500: #324a5f;
  --color-grey-700: #1b2a41;
  --color-grey-800: #0c1821;

  /* Red */
  --color-red-100: #fee2e2;
  --color-red-500: #ef4444;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  /* Yellow */
  --color-yellow-100: #FFDDB5;
  --color-yellow-500: #FFB958;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

html{
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  font-family: 'Outfit', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: color 0.1s ease;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  font-size: 15px;
}

button {
  background: none;
  cursor: pointer;
  outline: none;
  border: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  color: var(--color-grey-800);
}

body{
  background: var(--color-grey-100);
}

p{
  line-height: 22px;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-grey-100);
  border-radius: 50px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-grey-500);
  border-radius: 50px;
}

::placeholder { 
  color: var(--color-grey-500);
  font-size: 15px;
  opacity: 1; 
}

:-ms-input-placeholder { 
  color: var(--color-grey-500);
  font-size: 15px;
}

::-ms-input-placeholder { 
  color: var(--color-grey-500);
  font-size: 15px;
}

`;

export default GlobalStyles;
