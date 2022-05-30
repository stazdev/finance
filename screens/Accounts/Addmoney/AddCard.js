import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { ChevronLeft } from "../../../assets/icons";
import { COLORS, FONTS, SIZES } from "../../../constants";

const AddCard = () => {
  return (
    <SafeAreaView
      style={{
        marginHorizontal: SIZES.padding,
        justifyContent: "center",
      }}
    >
      <StatusBar backgroundColor={COLORS.dark} barStyle={"light-content"} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
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
    </SafeAreaView>
  );
};

export default AddCard;

const styles = StyleSheet.create({});
