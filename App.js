/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useUbuntu, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";



const firebaseConfig = {
  apiKey: "AIzaSyDGM3llj572UWLfQQqZXpsAf8lr3X9AXB0",
    authDomain: "hominos-c9bd8.firebaseapp.com",
    projectId: "hominos-c9bd8",
    storageBucket: "hominos-c9bd8.appspot.com",
    messagingSenderId: "753811967",
    appId: "1:753811967:web:17ea83686ea26fc1f5a7ca",
};

export let firebaseInit = null;

if (!firebase.apps.length) {
  firebaseInit = firebase.initializeApp(firebaseConfig);
}

export default function App() { 

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [ubuntuLoaded] = useUbuntu({
    Ubuntu_400Regular,
  });

  if (!oswaldLoaded || !ubuntuLoaded){
    return null;
  }

  return (
    <>
   <ThemeProvider theme={theme}>
   <AuthenticationContextProvider>
        <Navigation />
    </AuthenticationContextProvider>
    </ThemeProvider>
    <ExpoStatusBar style="auto" />
    </>
  );
}


