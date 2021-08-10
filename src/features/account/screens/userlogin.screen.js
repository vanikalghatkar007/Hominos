/* eslint-disable prettier/prettier */
import React, { useState, useContext } from "react";
import { AccountBackground, AccountCover,AccountContainer, AuthButton, AuthInput,ErrorContainer  } from "../components/account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";


export const UserLoginScreen = ({navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error } = useContext(AuthenticationContext);
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
               <ErrorContainer size="large">
                 <Text>{error}</Text>
               </ErrorContainer>  )}
      <Spacer size="large">
      <AuthButton mode="contained"
         onPress={() => onLogin(email, password)} >
          Login
      </AuthButton>
      </Spacer>
      <Spacer position="left">
      <Text>Don't have an account? Register</Text>
      </Spacer>
      <Spacer size="large">
        <AuthButton mode="contained"
        onPress={() => navigation.navigate("Register")}>
            Register
        </AuthButton>
      </Spacer>
      </AccountContainer>
      <Spacer size="large">
      <AuthButton mode="contained"
       onPress={() => navigation.navigate("ChefLogin")} >
          Chef Login
      </AuthButton>
      </Spacer>
    </AccountBackground>
    </SafeArea>
  );
};
