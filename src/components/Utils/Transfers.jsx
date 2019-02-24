import React from 'react';

import styled from "@emotion/styled";
import styles from "../../styles/variables.js";

const View = styled.span`
  height: 15px;
  margin-bottom: 7px;
  color: ${styles.mutedColor};
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
`;

const words = ['пересадка', 'пересадки', 'пересадок'];

function getWord(number, words) {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const Transfers = ({stops}) => {
    return (
        <View>
            {stops ? `${stops} ${getWord(stops, words)}` : null}
        </View>
    )
};

export default Transfers;