import React from 'react';
import styled from '@emotion/styled';
import styles from '../../../styles/variables'
import taLogo from '../../../assets/img/ta_logo.png';
import plane from '../../../assets/img/plane.png';

import {Button} from '../../../styles/styles.js';

import Date from '../../Utils/Date.jsx'
import Price from '../../Utils/Price.jsx'
import Transfers from '../../Utils/Transfers.jsx'


const CardItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 25px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: ${styles.boxShadow};
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  border-right: 1px solid #eceff1;
  padding: 25px 20px;
  @media(max-width: ${styles.breakPointMd}) {
    width: 100%;
    order: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 15px 10px;
    & > button {
    margin-top: 0;
    }
  }
  @media(max-width: ${styles.breakPointXs}) {
    padding: 15px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  padding: 25px;
  flex: 1;
  @media(max-width: ${styles.breakPointMd}) {
    padding: 15px;
  }
`;

const Flight = styled.div`
  display: flex;
  flex-direction: column;
`;

const Time = styled.span`
  font-size: 32px;
  color: ${styles.textColor};
  @media(max-width: ${styles.breakPointMd}) {
    font-size: 20px;
  }
`;

const Airport = styled.span`
  max-width: 110px;
  font-size: 12px;
  color: ${styles.textColor};
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -55px;
`;

const Plane = styled.div`
  position: relative;
  width: 96px;
  height: 1px;
  background-color: ${styles.borderColor};
  &:after {
    content: "";
    position: absolute;
    right: -20px;
    top: -6px;
    width: 13px;
    height: 13px;
    background-image: url(${plane});
    background-repeat: no-repeat;
  }
  @media(max-width: ${styles.breakPointXs}) {
    display: none;
  }
`;

const card = ({card}) => {
    console.log(card)
    const {arrival_date, arrival_time, carrier, departure_date, departure_time, destination, destination_name, origin, origin_name, price, stops} = card;

    return (
        <CardItem>
            <Aside>
                <img src={taLogo}/>
                <Button>
                    Купить<br/> за <Price price={price}/>
                </Button>
            </Aside>
            <Content>
                <Flight>
                    <Time>
                        {departure_time}
                    </Time>
                    <Airport>
                        {`${origin}, ${origin_name}`}
                    </Airport>
                    <Date date={departure_date}/>
                </Flight>
                <Info>
                    <Transfers stops={stops}/>
                    <Plane/>
                </Info>
                <Flight>
                    <Time>
                        {arrival_time}
                    </Time>
                    <Airport>
                        {`${destination}, ${destination_name}`}
                    </Airport>
                    <Date date={arrival_date}/>
                </Flight>
            </Content>
        </CardItem>
    )
};

export default card;