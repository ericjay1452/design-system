import { createGlobalStyle } from "styled-components";
import { PrimaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyles = createGlobalStyle `
 ${normalize()}

 html {
    font-size : 100%;
    font-family : ${PrimaryFont};
 }

 *, * ::before, *::after {
    box-sizing : border-box;
    margin : 0;
    padding : 0
 }

 main {
    width : 90%;
    margin : 0 auto;
    position : relative;
 }

`