import React, {useEffect, useState} from 'react';
import axios from 'axios';
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

function Content() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios.get('http://www.mocky.io/v2/5c72ccc03300006300760204')
            .then(response => {
                setCards(response.data)
            });
    }, []);

    return (
        <ContentContainer>
            {cards.map((card) => {

                return (
                    <Card card={card}/>
                )
                }
            )}
        </ContentContainer>
    )
};

export default Content;