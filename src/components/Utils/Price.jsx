import React from 'react';

import styled from "@emotion/styled";

const View = styled.span`
  display: inline-block;
`;

const Date = ({price}) => {
    return (
        <View>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</View>
    )
};

export default Date;