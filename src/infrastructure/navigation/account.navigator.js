/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserLoginScreen } from "../../features/account/screens/userlogin.screen";
import { ChefLoginScreen } from "../../features/account/screens/cheflogin.screen";
import { UserRegisterScreen } from "../../features/account/screens/user-register";
import { SplashScreen } from "../../features/account/screens/splash.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
    />

    <Stack.Screen
      name="Login"
      component={UserLoginScreen}
    />
    <Stack.Screen
      name="Register"
      component={UserRegisterScreen}
    />
    <Stack.Screen
      name="ChefLogin"
      component={ChefLoginScreen}
    />
  </Stack.Navigator>
);


