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
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from './src/infrastructure/navigation/index';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as firebase from "firebase/app";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDiancFZydUtcjndx0np2wowj8qDAsuV8s",
  authDomain: "mealstogo-87f5c.firebaseapp.com",
  projectId: "mealstogo-87f5c",
  storageBucket: "mealstogo-87f5c.appspot.com",
  messagingSenderId: "623086701531",
  appId: "1:623086701531:web:dfee83cd683cdac955f5fe"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

  useEffect(()=>{
    signInWithEmailAndPassword(auth, "email", "password")
    .then((user)=>{
      console.log(user);
      setIsAuthenticated(true)
    }).catch((error)=>{
      console.log("Signing in error: ", error);
    })
  }, []);

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto"/>
    </>
  );
}