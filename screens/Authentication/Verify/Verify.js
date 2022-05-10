import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { images, COLORS, SIZES, FONTS, icons } from "../../../constants";
import Card from "./VerificationCard";
import { Button } from "../../../components";
import { ArrowThickBack } from "../../../assets/icons";

const Verify = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={images.logoSmall} />
      </View>

      <View
        style={{
          flex: 0.8,
          justifyContent: "center",
        }}
      >
        <Card />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: SIZES.base * 8,
          }}
        >
          <Button
            label="Go back"
            labelStyle={{ marginLeft: SIZES.base }}
            icon={<ArrowThickBack />}
            containerStyle={{
              flexDirection: "row",
              paddingHorizontal: SIZES.padding2 * 5,
              paddingVertical: SIZES.padding,
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.padding,
            }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.padding,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 2 : 0,
  },
});
export default Verify;
