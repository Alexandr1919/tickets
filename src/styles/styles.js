import styled from '@emotion/styled';
import styles from "../styles/variables.js";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 840px;
  padding: 0 10px;
  margin: 0 auto;
`;

export const Title = styled.h2`
    width: 100%;
    color: ${styles.textColor};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 19px;
    text-transform: uppercase;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 35px;
  background-color: ${styles.buttonBackground};
  color: #ffffff;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1), 0 1px 0 #d64d08;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover, &:focus {
    background-color: #ff8124;
    outline: none;
  }
  @media(max-width: ${styles.breakPointMd}) {
    padding: 5px 15px;
    font-size: 14px;
  }
`;