import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { ChevronLeft, DebitCard } from "../../../assets/icons";
import { COLORS, FONTS, SIZES } from "../../../constants";

const AddCard = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
      }}
    >
      <StatusBar backgroundColor={COLORS.dark} barStyle={"light-content"} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: SIZES.base,
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
            color: COLORS.white,
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
          borderBottomColor: COLORS.white,
          padding: SIZES.padding,
        }}
      >
        <DebitCard />
        <Text
          style={{
            ...FONTS.fbody2,
            color: COLORS.white,
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
        <Text style={{ color: COLORS.white, ...FONTS.body2bold, fontSize: 18 }}>
          SAVED CARDS
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AddCard;

const styles = StyleSheet.create({});
