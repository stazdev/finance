import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { images, COLORS, SIZES, FONTS, icons } from "../constants";
import { Home, Accounts, Feeds, Profile } from "../screens";
import { AccountIcon, FeedsIcon, HomeIcon, ProfileIcon } from "../assets/icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#182338",
          height: 66,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <HomeIcon />
              <View>
                {focused ? (
                  <View style={styles.tabDot}></View>
                ) : (
                  <Text
                    style={{
                      color: COLORS.white,
                      marginTop: SIZES.padding / 2,
                    }}
                  >
                    Home
                  </Text>
                )}
              </View>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Accounts}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <AccountIcon />
              <View>
                {focused ? (
                  <View style={styles.tabDot}></View>
                ) : (
                  <Text
                    style={{
                      color: COLORS.white,
                      marginTop: SIZES.padding / 2,
                    }}
                  >
                    Account
                  </Text>
                )}
              </View>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Feeds"
        component={Feeds}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <FeedsIcon />
              <View>
                {focused ? (
                  <View style={styles.tabDot}></View>
                ) : (
                  <Text
                    style={{
                      color: COLORS.white,
                      marginTop: SIZES.padding / 2,
                    }}
                  >
                    Feeds
                  </Text>
                )}
              </View>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <ProfileIcon />
              <View>
                {focused ? (
                  <View style={styles.tabDot}></View>
                ) : (
                  <Text
                    style={{
                      color: COLORS.white,
                      marginTop: SIZES.padding / 2,
                    }}
                  >
                    Profile
                  </Text>
                )}
              </View>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return <MyTabs />;
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25,
  },
  tabDot: {
    width: 11,
    height: 11,
    backgroundColor: COLORS.greyLight,
    borderRadius: SIZES.radius,
    marginTop: SIZES.padding * 1.2,
  },
});
