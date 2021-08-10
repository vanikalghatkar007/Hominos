/* eslint-disable prettier/prettier */
import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AccountBackground, AccountCover,Title } from "../components/account.style";
import { AuthButton,  AnimationWrapper } from "../components/account.style";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";


const AuthButtonContainer = styled.View`
    padding-top: 500px; 
`;


export const SplashScreen = ({ navigation }) => {
    return (
        <SafeArea>
            <AccountBackground>
            <Title>HOMINO'S</Title>
            <AnimationWrapper>
                <LottieView
                key="animation"
                autoPlay
                loop
                resizeMode="cover"
                source={require("../../../../assets/watermelon.json")}
                />
            </AnimationWrapper>
            <Spacer>
            <AuthButtonContainer>
            <AuthButton mode="contained"
              onPress={() => navigation.navigate("Login")} >
               Get Started
            </AuthButton>
            </AuthButtonContainer>
            </Spacer>
 
            </AccountBackground>
        </SafeArea>
    );
};