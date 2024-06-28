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

  @font-face {
    font-family: 'Manrope';
    font-weight: 400;
    src: local('Manrope'), url('/fonts/Manrope/Manrope-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 500;
    src: local('Manrope'), url('/fonts/Manrope/Manrope-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 700;
    src: local('Manrope'), url('/fonts/Manrope/Manrope-Bold.ttf') format('truetype');
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

    @media (max-width: 768px) {
      font-size: 40px;
      font-weight: 600;
      line-height: 44px;
    }

    span {
      font-family: Trap;
      font-size: 50px;
      font-weight: 600;
      line-height: 55px;
      text-align: left;
      background: linear-gradient(90deg, #0093fe 0%, #50ffd5 72.7%) text;
      -webkit-text-fill-color: transparent;

      @media (max-width: 768px) {
        font-size: 40px;
        font-weight: 600;
        line-height: 44px;
      }
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

    @media (max-width: 768px) {
        display: none;
      }
  }

 
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
    padding-left: 0;
    padding-right: 0;

    @media (max-width: 768px) {
      width: 100%;
      padding-left: 16px;
      padding-right: 16px;
      left: 0;
    }

    margin-left: auto;
    margin-right: auto;
  }

  .ant-drawer .ant-drawer-header{
    display: none;
  }

  .ant-drawer .ant-drawer-content{
    background: unset !important;
  }

  :where(.css-dev-only-do-not-override-zg0ahe).ant-popover .ant-popover-inner{
    padding: 0 !important;
    background-color: unset !important;
    box-shadow: unset !important;
  }

  .ant-popover-placement-bottom>.ant-popover-arrow
  {
    display: none !important;
  }

  .ant-table-row > .ant-table-cell-row-hover {
    background: unset !important;
    cursor: pointer;
  }

  .ant-table-thead .ant-table-cell {
    background-color: rgba(10, 9, 16, 1) !important;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: left;
    color: rgba(101, 99, 111, 1) !important;

    &::before {
      display: none;
    }
  }

  .ant-table-tbody {
    background-color: rgba(10, 9, 16, 1);
    color: rgba(240, 240, 240, 1);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: left;
  }
  .ant-table-wrapper .ant-table-pagination.ant-pagination {
    margin: 0 !important;
    padding: 16px 0 !important;
  }


  .ant-table-cell {
    padding: 20px 16px !important;
    border-bottom: 1px solid rgba(36, 35, 50, 1) !important;
  }

 
  .ant-table-pagination.ant-pagination,
  .ant-table-placeholder {
    background: rgba(10, 9, 16, 1) !important;
  }

  .ant-table-placeholder .ant-table-cell {
    height: 176px;
    text-align: center;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: rgba(122, 122, 122, 1);
    background: rgba(10, 9, 16, 1) !important;
  }

  .ant-pagination .ant-pagination-item-active {
    background-color: rgba(45, 44, 59, 1) !important;
    border: none;
    width: 32px;
    height: 32px;
    a {
      color: rgba(222, 222, 222, 1);
    }
  }

  .ant-pagination-item-link {
    svg {
      fill: #fff;
    }
  }

  .hidden-scroll::-webkit-scrollbar {
    display: none;
  }

  .hidden-scroll {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .h-100{
    height: 100%;
  }

  .w-100{
    width: 100%;
  }

  .border{
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  }
  
`;

export default GlobalStyles;