/* eslint-disable prettier/prettier */
import React, { useState, useContext, useEffect } from "react";
import { AccountBackground, AccountCover,AccountContainer, AuthButton, AuthInput,ErrorContainer  } from "../components/account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { firebaseInit } from "../../../../App";

let chefsRef = null;
if (firebaseInit){
  chefsRef = firebaseInit.database().ref("/chefs");
}

export const ChefLoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chefs, setChefs] = useState(null);
  const { onLogin, error } = useContext(AuthenticationContext);

  useEffect(() => {
    if (chefsRef){
      chefsRef.on("value", chefs => {
        let data = chefs.val();
        let allChefs = Object.values(data);
        setChefs([...allChefs]);
      });
    }
  }, []);

  return (
    <SafeArea>
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
      <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large" >
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          </Spacer>
            {error && (
            <ErrorContainer>
            <Text>{error}</Text>
            </ErrorContainer>
            )}
            <Spacer size="large">
            <AuthButton mode="contained"
              onPress={() => {

                let chef = chefs?.filter(chef=>chef.email === email);
                if (chef?.length) {
                  onLogin(email, password);
                  navigation.navigate("Kitchens");
                } else {
                  console.log("later");
                }
              }} >
                Chef Login
            </AuthButton>
            </Spacer>
        </AccountContainer>
        <Spacer>
        <AuthButton mode="contained"
              onPress={() => navigation.goBack()} >
                Back
            </AuthButton>
            </Spacer>
    </AccountBackground>
    </SafeArea>
  );
};
