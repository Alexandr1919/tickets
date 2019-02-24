import React from 'react';
import styled from '@emotion/styled';
import {Title} from "../../../styles/styles.js";
import styles from "../../../styles/variables.js";

const CurrencyBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    @media(max-width: ${styles.breakPointLg}) {
      text-align: center;
      padding: 5px 15px;
    }
    @media(max-width: ${styles.breakPointXs}) {
      flex-direction: column;
    }
`;

const Input = styled.input`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    &:checked + label {
      background-color: ${styles.mainColor};
      color: #ffffff;
      border: 1px solid ${styles.mainColor};;
    }
`;

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    max-width: 68px;
    height: 40px;
    background-color: #ffffff;
    color: ${styles.mainColor};
    border: 1px solid ${styles.borderColor};
    cursor: pointer;
    &:first-of-type {
       border-radius: 5px 0 0 5px;
    }
    &:last-of-type {
       border-radius: 0 5px 5px 0;
    }
    &:not(:last-of-type) {
      border-right: none;
    }
    &:hover, &:focus {
      background-color: ${styles.secondColor};
      border-color: #64b5f5;
      & + input + label {
        border-left-color: #64b5f5;
      }
    }
    @media(max-width: ${styles.breakPointXs}) {
      &:first-of-type {
       border-radius: 5px 5px 0 0;
      }
      &:not(:last-of-type) {
        border-bottom: none;
        border-right: 1px solid ${styles.borderColor};
      }
      &:last-of-type {
       border-radius: 0 0 5px 5px;
      }
      &:hover, &:focus {
      background-color: ${styles.secondColor};
      border-color: #64b5f5;
      & + input + label {
        border-left-color: ${styles.borderColor};
      }
    }
    }
`;
const currency = () => {
    return (
        <CurrencyBlock>
            <Title>Валюта</Title>
            <Input type="radio" name="currency" value="rub" id="rub"/>
            <RadioLabel htmlFor="rub"><span>RUB</span></RadioLabel>
            <Input type="radio" name="currency" value="usd" id="usd"/>
            <RadioLabel htmlFor="usd"><span>USD</span></RadioLabel>
            <Input type="radio" name="currency" value="euro" id="euro"/>
            <RadioLabel htmlFor="euro"><span>EURO</span></RadioLabel>
        </CurrencyBlock>
    )
};

export default currency;