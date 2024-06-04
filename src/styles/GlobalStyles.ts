"use client";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Familjen-Grotesk';
    font-weight: bold;
    src: local('Familjen-Grotesk'), url('/fonts/Familjen-Grotesk/FamiljenGrotesk-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Familjen-Grotesk';
    font-weight: normal;
    src: local('Familjen-Grotesk'), url('/fonts/Familjen-Grotesk/FamiljenGrotesk-Regular.ttf') format('truetype');
  }

   @font-face {
    font-family: 'Inter';
    src: local('Inter'), url('/fonts/Inter/Inter-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: bold;
    src: local('Inter'), url('/fonts/Inter/Inter-Bold.ttf') format('truetype');
  }

  body {
    font-family: "Inter";

    img {
      height: auto;
    }

    top: 0 !important;
    width: 100% !important;
  }

  .flex{
    display: flex;
  }

  .hover{
    cursor: pointer;
  }
`;

export default GlobalStyles;