import styled from "styled-components";

const PrimaryBlue = "#0300086";

const Button = styled.button`
border-radius: 2px;
min-width: 100px;
padding: 12px 24px;
font-size: 1rem;
cursor: pointer;
font-family: "Roboto Mono";
`

const PrimaryButton = styled(Button)`
background-color: red;
border: none;
padding: 12px 24px;
color: white;
font-size: 1rem;
`

export default PrimaryButton