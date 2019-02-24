import React from 'react';
import {Title} from "../../../styles/styles.js";
import styled from '@emotion/styled';
import styles from "../../../styles/variables.js";

const TransfersBlock = styled.div`
  & > h2 {
    margin-left: 15px;
    @media(max-width: ${styles.breakPointLg}) {
    margin-left: 0;
    }
  }
  @media(max-width: ${styles.breakPointLg}) {
    padding: 5px;
  }
`;

const OptionsWrapper = styled.div`
  display: block;
  @media(max-width: ${styles.breakPointLg}) {
    width: 225px;
    border-radius: 3px;
  }
`;

const TransfersOption = styled.div`
  display: flex;
`;

const HiddenInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  &:checked + label:before {
    border-color: ${styles.mainColor};
    background-color: ${styles.secondColor};
  }
  &:checked + label:after {
    content: "";
    display: block;
    position: absolute;
    left: 22px;
    top: 15px;
    width: 7px;
    height: 4px;
    border-left: 2px solid #64b5f5;
    border-bottom: 2px solid #64b5f5;
    transform: rotate(-45deg);
    @media(max-width: ${styles.breakPointLg}) {
      left: 7px;
      top: 12px;
    }
  }
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 15px;
  color: ${styles.textColor};
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: ${styles.secondColor};
    & > a {
      display: block;
    }
  }
  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    border: 1px solid ${styles.borderColor};
    border-radius: 3px;
  }
  @media(max-width: ${styles.breakPointLg}) {
    padding: 5px 0;
  }
`;

const Only = styled.a`
  display: none;
  position: absolute;
  right: 20px;
  color: ${styles.mainColor};
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;

const transfers = () => {
    return (
        <TransfersBlock>
            <Title>Количество пересадок</Title>
            <OptionsWrapper>
                <TransfersOption>
                    <HiddenInput type="checkbox" id="without-transfer"/>
                    <Label htmlFor="without-transfer">
                        <span>Без пересадок</span>
                        <Only>Только</Only>
                    </Label>
                </TransfersOption>
                <TransfersOption>
                    <HiddenInput type="checkbox" id="one-transfer"/>
                    <Label htmlFor="one-transfer">
                        <span>1 пересадка</span>
                        <Only>Только</Only>
                    </Label>
                </TransfersOption>
                <TransfersOption>
                    <HiddenInput type="checkbox" id="two-transfer"/>
                    <Label htmlFor="two-transfer">
                        <span>2 пересадки</span>
                        <Only>Только</Only>
                    </Label>
                </TransfersOption>
                <TransfersOption>
                    <HiddenInput type="checkbox" id="three-transfer"/>
                    <Label htmlFor="three-transfer">
                        <span>3 пересадки</span>
                        <Only>Только</Only>
                    </Label>
                </TransfersOption>
            </OptionsWrapper>
        </TransfersBlock>

    )
};

export default transfers;
