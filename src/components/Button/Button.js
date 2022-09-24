import styled from "styled-components";

const PrimaryBlue = "#030086";

const SecondaryBlue = "#030068";

const TertiaryBlue = "navyblue"

const Button = styled.button`
border-radius: 2px;
min-width: 100px;
padding: 12px 24px;
font-size: 1rem;
cursor: pointer;
font-family: "Roboto Mono";
`

const PrimaryButton = styled(Button)`
background-color: ${PrimaryBlue};
border: none;
padding: 12px 24px;
color: white;
font-size: 1rem;
`

const SecondaryButton = styled(Button)`
 background-color: ${SecondaryBlue};
 border: none;
 outline : 2px solid green;
padding: 12px 24px;
color: white;
font-size: 1rem;
margin-left : 1rem;

`

const TertiaryButton = styled(Button)`
 background-color: ${TertiaryBlue};
 border: 2px groove orange;
padding: 12px 24px;
color: white;
font-size: 1rem;
`

export default PrimaryButton