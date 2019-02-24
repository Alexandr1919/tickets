import React from 'react';
import styled from '@emotion/styled';
import Currency from './Currency/Currency';
import Transfers from './Transfers/Transfers';
import styles from '../../styles/variables.js';

const Filter = styled.section`
    width: 235px;
    padding-bottom: 15px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: ${styles.boxShadow};
    @media(max-width: 820px) {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 10px;
    }
`;

const filter = () => {
    return (
        <Filter>
            <Currency/>
            <Transfers/>
        </Filter>
    )
}


export default filter;