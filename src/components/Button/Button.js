import styled from "styled-components";
import { defaultTheme, typescale } from "../../utils"
import { applyStyleModifiers } from "styled-components-modifiers";

// always use your modifiers at the bottom level to avoid css override


// P.S, always use the modifiers props wherever you want to render this UI in order to make it
// Adapts to this BUTTON_MODIFIERS styles
// e.g, i used mine in App.js
const BUTTON_MODIFIERS = {
    small : () => `
        font-size : ${typescale.helperText};
        padding  : 8px;
        min-width : 100px;
        position : relative;
        background : red;
        `
    ,

    large : () => `
     padding : 16px 25px;
     font-size : ${typescale.header5}
     position : relative;
    `
    ,
}

const Button = styled.button`
border-radius: 2px;
min-width: 100px;
padding: 12px 24px;
font-size: ${typescale.paragraph};
cursor: pointer;
font-family: ${typescale.PrimaryFont};
margin-right: 1rem;
margin-left: 1rem;
transition: background .2s linear, color .2s linear;

 &:hover {
   background-color: ${defaultTheme.primaryHoverColor};
   color : ${defaultTheme.textColorOnPrimary}
 }


`

export const PrimaryButton = styled(Button)`
background-color: ${defaultTheme.primaryColor};
border: none;
padding: 12px 24px;
color: ${defaultTheme.textColorOnPrimary};
font-size: ${typescale.header1};
color : red;

${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
 border: 2px solid ${defaultTheme.primaryColor};
color: ${defaultTheme.primaryColor};

${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
 border: 2px solid transparent;
 color : ${defaultTheme.primaryColor}

 ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
