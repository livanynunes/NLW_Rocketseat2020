import React, { Fragment } from "react";
import Routes from "./src/routes";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

export default function App() {
  const [fontsLoader] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoader) {
    return <AppLoading />;
  }
  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Fragment>
  );
}
