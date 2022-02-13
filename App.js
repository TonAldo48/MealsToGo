import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from "./src/infrastructure/theme"
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);

import { Navigation } from './src/infrastructure/navigation/index';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiancFZydUtcjndx0np2wowj8qDAsuV8s",
  authDomain: "mealstogo-87f5c.firebaseapp.com",
  projectId: "mealstogo-87f5c",
  storageBucket: "mealstogo-87f5c.appspot.com",
  messagingSenderId: "623086701531",
  appId: "1:623086701531:web:dfee83cd683cdac955f5fe"
};

if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
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