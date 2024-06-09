"use client";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'Trap';
  font-weight: 700;
  src: local('Trap'), url('/fonts/Trap/Trap-Bold.otf') format('opentype');
}

  @font-face {
    font-family: 'Trap';
    font-weight: normal;
    src: local('Trap'), url('/fonts/Trap/Trap-Regular.ttf') format('truetype');
  }

   @font-face {
    font-family: 'Trap';
    font-weight: 400;
    src: local('Trap'), url('/fonts/Trap/Trap-Regular.ttf') format('truetype');
  }

   @font-face {
    font-family: 'Metrophobic';
    font-weight: 400;
    src: local('Metrophobic'), url('/fonts/Metrophobic/Metrophobic-Regular.ttf') format('truetype');
  }

   html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Metrophobic', sans-serif;
    img {
      height: auto;
    }

    top: 0 !important;
    width: 100% !important;
  }

  .flex{
    display: flex;
  }

  .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .relative{
    position: relative;
  }
  
  .container{
    width: 100%;
    max-width: 792px;
    margin: 0 auto;
  }

  .hover{
    cursor: pointer;
  }
`;

export default GlobalStyles;