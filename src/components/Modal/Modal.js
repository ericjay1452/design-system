import React from "react";
import styled from "styled-components";
import { typescale } from "../../utils";
import { PrimaryButton } from "../Button/Button";
import { Illustrations, CloseIcon } from "../../assets" 

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${props => props.theme.formElementBackground};
`;

const SignUpHeader = styled.h3`
  font-size: ${typescale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typescale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;


export const SignUpModal = () => {
    return (
      <ModalWrapper>
        <img src={Illustrations.Signup} alt="Sign up for an account!" />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign Up
        </PrimaryButton>

        <CloseModalButton aria-label="Close Modal">
            <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    );
  };