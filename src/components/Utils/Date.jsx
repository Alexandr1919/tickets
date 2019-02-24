import React from 'react';
import moment from "moment";
import 'moment/locale/ru';

import styled from "@emotion/styled";
import styles from "../../styles/variables.js";

const View = styled.span`
  font-size: 12px;
  color: ${styles.mutedColor};
`;

const Date = ({date}) => {
    return (
        <View>
            {moment(date, 'DD-MM-YYYY').locale('ru').format('DD MMM YYYY, dd')}
        </View>
    )
};

export default Date;