import React from 'react';
import styled from '@emotion/styled';
import styles from '../../../styles/variables'
import taLogo from '../../../assets/img/ta_logo.png';
import plane from '../../../assets/img/plane.png';

import {Button} from '../../../styles/styles.js';

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

const Date = styled.span`
  font-size: 12px;
  color: ${styles.mutedColor};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -55px;
`;

const Transfers = styled.span`
  margin-bottom: 7px;
  color: ${styles.mutedColor};
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
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

const card = () => {
    return (
        <CardItem>
            <Aside>
                <img src={taLogo}/>
                <Button>
                    Купить<br/> за <span>21 032​₽</span>
                </Button>
            </Aside>
            <Content>
                <Flight>
                    <Time>
                        09:25
                    </Time>
                    <Airport>
                        VVO, Владивосток
                    </Airport>
                    <Date>
                        9 окт 2018, Пт
                    </Date>
                </Flight>
                <Info>
                    <Transfers>
                        3 пересадки
                    </Transfers>
                    <Plane/>
                </Info>
                <Flight>
                    <Time>
                        11:45
                    </Time>
                    <Airport>
                        Тель-Авив, TLV
                    </Airport>
                    <Date>
                        10 окт 2018, Пт
                    </Date>
                </Flight>
            </Content>
        </CardItem>
    )
};

export default card;