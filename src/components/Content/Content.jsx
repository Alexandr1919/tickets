import React from 'react';
import styled from '@emotion/styled';
import Card from './Card/Card.jsx';
import styles from '../../styles/variables.js';

const ContentContainer = styled.section`
  margin-left: 20px;
  flex: 1;
  @media(max-width: ${styles.breakPointLg}) {
    margin-left: 0;
  }
`;

const content = () => {
    return (
        <ContentContainer>
            <Card/>
        </ContentContainer>
    )
};

export default content;