/* eslint-disable prettier/prettier */
import React, { useState, useContext }  from "react";
import { AccountBackground, AccountCover,AccountContainer,AuthButton,AuthInput,ErrorContainer } from "../../../features/account/components/account.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "react-native";
import { firebaseInit } from "../../../../App";

export const ChefRegisterScreen = ( { navigation } ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);

  let db = null;
  if (firebaseInit){
    db = firebaseInit.database();
  }

  return (
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
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text>{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <AuthButton
            mode="contained"
            onPress={() =>{
              db.ref("/chefs").push({
                  email, password,
                });
                onRegister(email, password, repeatedPassword);
                navigation.goBack();
            }}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
