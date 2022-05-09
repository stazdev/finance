import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { images, COLORS, SIZES, FONTS, icons } from "../../../constants";
import { Button } from "../../../components";
import { ArrowThick, ForgotPassword } from "../../../assets/icons";

const ForgetPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={images.logoSmall} />
      </View>
      <View
        style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={styles.bigText}>Forgot password?</Text>
        <ForgotPassword />
        <Text style={styles.smallText}>
          We just sent a verification {"\n"} code to your email address {"\n"}{" "}
          someone@gmail.com
        </Text>

        <View style={{ marginTop: SIZES.padding * 4 }}>
          <Button
            icon={<ArrowThick />}
            onPress={() => navigation.navigate("ForgetPasswordVerification")}
            containerStyle={{
              backgroundColor: COLORS.primary,
              paddingHorizontal: SIZES.padding2 * 5,
              paddingVertical: SIZES.padding,
              flexDirection: "row",
              borderRadius: SIZES.radius,
            }}
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

  bigText: {
    color: COLORS.white,
    ...FONTS.fh4,
    marginBottom: SIZES.padding * 2,
    marginTop: SIZES.padding2 * 1.5,
  },
  smallText: {
    color: COLORS.greyLight,
    ...FONTS.fbody1,
    textAlign: "center",
    marginTop: SIZES.padding * 4,
  },
});
export default ForgetPassword;
