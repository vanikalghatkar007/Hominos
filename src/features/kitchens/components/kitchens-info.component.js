/* eslint-disable prettier/prettier */

import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { Saved } from "../../../components/saved/saved.components";


const KitchenCard = styled(Card)`
  background-color: #F7F1AF ;
  margin-top: 10px;
`;

const KitchenCardCover = styled(Card.Cover)`
  padding: 5px;
  background-color: white;
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;


export const KitchenInfo = ({ kitchen = {} }) => {
  const {
    name = "Some Restaurant",
    photos = [
      "https://th.bing.com/th/id/R.9aec53a02be059b10f9c7f114625236a?rik=cjZ9cp7dAQDxnQ&riu=http%3a%2f%2fweneedfun.com%2fwp-content%2fuploads%2f2015%2f10%2fDelicious-Food-Photos-12.jpg&ehk=b0dBxL32gyHkN3y6KQ4ntTxrBg8juh%2f%2bmBTldXbFulA%3d&risl=&pid=ImgRaw",
    ],
    address = "100 some random street",
  } = kitchen;

  return (
    <KitchenCard elevation={5}>
      <KitchenCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
      <Title>{name}</Title>
      <Saved kitchen={kitchen}/>
      <Address>{address}</Address>
      </Info>
    </KitchenCard>
  );
};
