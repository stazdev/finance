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
import { Button } from "../../../screens";
import { DropDown, Eye, EyeClose } from "../../../assets/icons";

const Login = ({ navigation }) => {
  const [inputType, setInputType] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
        <Text style={styles.bigText}>Welcome Back</Text>
        <Text style={styles.smallText}>Sign in to continue</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        {!inputType ? (
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
              keyboardType="numeric"
              maxLength={10}
              placeholder="903 401 2507"
              placeholderTextColor="lightgrey"
              selectionColor={COLORS.white}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.base * 7,
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
              placeholder="Oluwasholatemitayo@gmail.com"
              placeholderTextColor="lightgrey"
              selectionColor={COLORS.white}
            />
          </View>
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setInputType(!inputType)}
        >
          {!inputType ? (
            <Text
              style={{
                ...FONTS.fbody2,
                color: COLORS.primary,
                marginTop: SIZES.padding,
              }}
            >
              Sign in with email instead
            </Text>
          ) : (
            <Text
              style={{
                ...FONTS.fbody2,
                color: COLORS.primary,
                marginTop: SIZES.padding,
              }}
            >
              Sign in with number instead
            </Text>
          )}
        </TouchableOpacity>
        {/* Password */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base * 7,
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
            {showPassword ? <EyeClose /> : <EyeClose />}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Password")}
        >
          <Text
            style={{
              ...FONTS.fbody2,
              color: COLORS.primary,
              marginTop: SIZES.padding,
              textAlign: "right",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: SIZES.font * 2,
          }}
        >
          <Button label="Login" onpress={() => navigation.navigate("Tabs")} />
        </View>

        <View style={{ alignItems: "center", marginTop: SIZES.base * 7 }}>
          <Text
            style={{
              ...FONTS.fbody2,
              color: COLORS.white,
            }}
          >
            Don’t have an account yet?
          </Text>
          <Text
            style={{
              ...FONTS.fbody2,
              color: COLORS.white,
            }}
          >
            Let’s get you{" "}
            <Text
              style={{
                color: COLORS.primary,
              }}
              onPress={() => navigation.navigate("SignUp")}
            >
              signed up
            </Text>{" "}
          </Text>
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.2 : 0,
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
export default Login;
