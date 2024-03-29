import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ThemeProvider, ThemeContext } from "./context-store/context";

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
  ExploreInvestment,
  ExploreInvestmentDetail,
  PayBill,
  BuyAirtime,
  Transfer,
  InternalTransfer,
  LocalTransfer,
  AddMoney,
  BankTransfer,
  AddCard,
  CreateGoal,
  GoalCreator,
} from "./screens";

import MyTabs from "./navigation/tabs";
import { COLORS } from "./constants";
import { Message, KycInfo } from "./components";

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: COLORS.dark,
//     border: "transparent",
//   },
// };

const Stack = createStackNavigator();

export default function App() {
  // const { theme, setTheme } = useContext(ThemeContext);

  const [loaded] = useFonts({
    "CrimsonPro-Bold": require("./assets/fonts/CrimsonPro-Bold.ttf"),
    "CrimsonPro-Regular": require("./assets/fonts/CrimsonPro-Regular.ttf"),
    "FaunaOne-Regular": require("./assets/fonts/FaunaOne-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider>
      <NavigationContainer theme={DarkTheme}>
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
          <Stack.Screen
            name="ExploreInvestment"
            component={ExploreInvestment}
          />
          <Stack.Screen name="PayBill" component={PayBill} />
          <Stack.Screen name="BuyAirtime" component={BuyAirtime} />
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="InternalTransfer" component={InternalTransfer} />
          <Stack.Screen name="LocalTransfer" component={LocalTransfer} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="KycInfo" component={KycInfo} />
          <Stack.Screen name="AddMoney" component={AddMoney} />
          <Stack.Screen name="BankTransfer" component={BankTransfer} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="CreateGoal" component={CreateGoal} />
          <Stack.Screen name="GoalCreator" component={GoalCreator} />
          <Stack.Screen
            name="ExploreInvestmentDetail"
            component={ExploreInvestmentDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
