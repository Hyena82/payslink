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
    font-weight: 500;
    src: local('Trap'), url('/fonts/Trap/Trap-Medium.otf') format('opentype');
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
   

    top: 0 !important;
    width: 100% !important;
    color: #fff;
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
  


  

  .hover:hover{
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    opacity: 0.8;
  }

  .text-gradient{
    background: linear-gradient(90deg, #0093fe 0%, #50ffd5 72.7%) text;
    -webkit-text-fill-color: transparent;
  }

  .title-section {
    font-family: Trap;
    font-size: 50px;
    font-weight: 600;
    line-height: 55px;
    text-align: left;
    max-width: 791px;
    width: 100%;
    position: relative;

    span {
      font-family: Trap;
      font-size: 50px;
      font-weight: 600;
      line-height: 55px;
      text-align: left;
      background: linear-gradient(90deg, #0093fe 0%, #50ffd5 72.7%) text;
      -webkit-text-fill-color: transparent;
    }
  }

  .slick-next:before,
  .slick-next::after,
  .slick-prev:before,
  .slick-prev::after {
    display: none;
  }

  .layout-line {
    position: absolute;
    background-color: rgba(53, 53, 57, 1);
    width: 1px;
    height: 100%;
    top: 0;
  }

  /* .layout-line-relative {
    position: absolute;
    background-color: rgba(53, 53, 57, 1);
    width: 1px;
    height: 100%;
    position: fixed;
    top: 0;
  } */

  .container {
    padding-left: 2.2%;
    padding-right: 2.2%;
  }

  .layout-line-right {
    right: 25%;
  }

  .layout-line-left {
    left: 15%;
  }

  .container-middle {
    width: 60%;
    left: -5%;
    position: relative;

    margin-left: auto;
    margin-right: auto;
  }
  
`;

export default GlobalStyles;