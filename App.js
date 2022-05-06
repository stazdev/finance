import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import {
  Onboarding,
  Login,
  SignUp,
  Verify,
  Password,
  ForgetPasswordVerification,
  Receipt,
  Info,
  AccountDetails,
} from "./screens";

import MyTabs from "./navigation/tabs";
import { COLORS } from "./constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.secondary,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "CrimsonPro-Bold": require("./assets/fonts/CrimsonPro-Bold.ttf"),
    "CrimsonPro-Regular": require("./assets/fonts/CrimsonPro-Regular.ttf"),
    "FaunaOne-Regular": require("./assets/fonts/FaunaOne-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Onboarding"
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen
          name="ForgetPasswordVerification"
          component={ForgetPasswordVerification}
        />
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="Receipt" component={Receipt} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="AccountDetails" component={AccountDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
