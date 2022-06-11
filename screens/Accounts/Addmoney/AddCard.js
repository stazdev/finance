import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context-store/context";
import { ChevronLeft, DebitCard } from "../../../assets/icons";
import { COLORS, FONTS, SIZES } from "../../../constants";

const AddCard = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
        paddingHorizontal: SIZES.padding,
      }}
    >
      <StatusBar backgroundColor={COLORS.dark} barStyle={"light-content"} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: SIZES.padding,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <ChevronLeft />
        </TouchableOpacity>

        <Text
          style={{
            color: theme === "light" ? COLORS.dark : COLORS.white,
            ...FONTS.h4Bold,
            marginLeft: SIZES.padding * 7,
          }}
        >
          Add By Card
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          borderBottomWidth: 0.25,
          borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
          padding: SIZES.padding,
        }}
      >
        <DebitCard />
        <Text
          style={{
            ...FONTS.fbody2,
            color: theme === "light" ? COLORS.dark : COLORS.white,
            fontSize: 13,
            lineHeight: 15.99,
          }}
        >
          Add money to your main balance using your naira debit card
        </Text>
      </View>

      <View style={{ marginHorizontal: SIZES.padding }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              ...FONTS.fbody2,
              color: COLORS.primary,
              textAlign: "center",
              paddingVertical: SIZES.padding2 * 2,
            }}
          >
            +Add New Card
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: theme === "light" ? COLORS.dark : COLORS.white,
            ...FONTS.body2bold,
            fontSize: 18,
          }}
        >
          SAVED CARDS
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AddCard;

const styles = StyleSheet.create({});
