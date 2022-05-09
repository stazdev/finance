import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { images, COLORS, SIZES, FONTS, icons } from "../../../constants";
import Card from "../Verify/VerificationCard";
import { Verification } from "../../../assets/icons";

const ForgetPasswordVerification = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={images.logoSmall} />
      </View>

      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            ...FONTS.fbody1,
            color: COLORS.white,
            textAlign: "center",
            marginBottom: SIZES.padding * 3,
          }}
        >
          Verification
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: SIZES.font * 1.5,
          }}
        >
          <Verification />
        </View>
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.padding,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default ForgetPasswordVerification;
