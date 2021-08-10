/* eslint-disable prettier/prettier */
import styled from "styled-components/native";
import { Button, TextInput} from "react-native-paper";
import { Text } from "../../../components/typography/text.component";


export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  
`;

export const AccountCover = styled.View`
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  height: 100%;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
    color: "#FFF192",
  })`
  padding: ${(props) => props.theme.space[2]};
  `;


export const AuthInput = styled(TextInput)`
  width: 270px;
`;

export const ErrorContainer = styled.View`
  max-width: 250px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Title = styled(Text)`
  font-size: 40px;
  color: orange;

`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 140px;
  padding: ${(props) => props.theme.space[2]};
`;
