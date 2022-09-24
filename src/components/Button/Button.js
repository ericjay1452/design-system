import styled from "styled-components";
import { defaultTheme, typescale } from "../../utils"
// import {  } from "../../utils";

const Button = styled.button`
border-radius: 2px;
min-width: 100px;
padding: 12px 24px;
font-size: ${typescale.paragraph};
cursor: pointer;
font-family: ${typescale.PrimaryFont};
margin-right: 1rem;
margin-left: 1rem;
`

const PrimaryButton = styled(Button)`
background-color: ${defaultTheme.primaryColor};
border: none;
padding: 12px 24px;
color: ${defaultTheme.textColorOnPrimary};
font-size: ${typescale.header1};
`

const SecondaryButton = styled(Button)`
 border: 2px solid ${defaultTheme.primaryColor};
color: ${defaultTheme.primaryColor};

`

const TertiaryButton = styled(Button)`
 border: 2px solid transparent;
 color : ${defaultTheme.primaryColor}
`

export default PrimaryButton