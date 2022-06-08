import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
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
import { DropDown, Eye, EyeClose } from "../../../assets/icons";

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.secondary}
        barStyle={"light-content"}
      />
      <View>
        <Image source={images.logoSmall} />
      </View>
      <View>
        <Text style={styles.bigText}>Welcome</Text>
        <Text style={styles.smallText}>Complete your setup</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base * 7,
          }}
        >
          <TouchableOpacity
            style={{
              width: SIZES.padding2 * 4,
              height: SIZES.padding * 2.5,
              borderBottomColor: COLORS.white,
              marginRight: 10,
              borderBottomWidth: 1,
              flexDirection: "row",
              ...FONTS.fbody2,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            activeOpacity={0.7}
          >
            <Text style={{ color: COLORS.white, marginRight: 5 }}>+234</Text>
            <DropDown />
          </TouchableOpacity>
          <TextInput
            style={{
              flex: 1,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: SIZES.padding * 2.5,
              color: COLORS.white,
              ...FONTS.body3,
              paddingBottom: 3,
            }}
            onChangeText={(number) => setPhoneNumber(number)}
            defaultValue={phoneNumber}
            keyboardType="numeric"
            maxLength={10}
            placeholder="903 401 2507"
            placeholderTextColor="lightgrey"
            selectionColor={COLORS.white}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base * 5,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: SIZES.padding * 2.5,
              color: COLORS.white,
              ...FONTS.body3,
              paddingBottom: 3,
            }}
            onChangeText={(email) => setEmailAddress(email)}
            defaultValue={emailAddress}
            placeholder="Oluwasholatemitayo@gmail.com"
            placeholderTextColor="lightgrey"
            selectionColor={COLORS.white}
          />
        </View>

        {/* Password */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base * 5,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: SIZES.padding * 2.5,
              color: COLORS.white,
              ...FONTS.body3,
              paddingBottom: 3,
            }}
            onChangeText={(number) => setPassword(number)}
            defaultValue={password}
            placeholder="Enter your password"
            placeholderTextColor="lightgrey"
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              height: 30,
              width: 30,
            }}
            activeOpacity={0.7}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye /> : <EyeClose />}
          </TouchableOpacity>
        </View>

        {/* re-ennter password */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base * 5,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: SIZES.padding * 2.5,
              color: COLORS.white,
              ...FONTS.body3,
              paddingBottom: 3,
            }}
            onChangeText={(number) => setPassword2(number)}
            defaultValue={password2}
            placeholder="Re - enter password"
            placeholderTextColor="lightgrey"
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword2}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              height: 30,
              width: 30,
            }}
            activeOpacity={0.7}
            onPress={() => setShowPassword2(!showPassword2)}
          >
            {showPassword2 ? <Eye /> : <EyeClose />}
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: SIZES.font * 2,
          }}
        >
          <Button
            label="Sign Up"
            labelStyle={{
              paddingVertical: SIZES.padding2,
              paddingHorizontal: SIZES.padding2 * 5,
            }}
            containerStyle={{
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.padding,
            }}
            onPress={() => navigation.navigate("Verify")}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: SIZES.base * 5 }}>
          <Text
            style={{
              ...FONTS.fbody2,
              color: COLORS.white,
            }}
          >
            I already have an account
          </Text>
          <Button
            label="Log in"
            labelStyle={{
              color: COLORS.primary,
            }}
            onPress={() => navigation.navigate("Login")}
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
    ...FONTS.h2Bold,
    marginLeft: SIZES.padding,
    marginTop: SIZES.padding2 * 1.5,
  },
  smallText: {
    color: COLORS.greyLight,
    ...FONTS.fbody1,
    marginLeft: SIZES.padding,
    marginTop: SIZES.padding2 * 1.5,
  },
});
export default SignUp;
