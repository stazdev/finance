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
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context-store/context";
import { images, COLORS, SIZES, FONTS } from "../../../constants";
import { Button } from "../../../components";
import { DropDown, Eye, EyeClose, Thumb } from "../../../assets/icons";

const Login = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [inputType, setInputType] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: theme === "light" ? COLORS.white : COLORS.secondary,
        },
      ]}
    >
      <StatusBar
        backgroundColor={COLORS.secondary}
        barStyle={"light-content"}
      />
      <View>
        <Image
          source={theme === "light" ? images.logoSmallDark : images.logoSmall}
        />
      </View>
      <View>
        <Text
          style={[
            styles.bigText,
            { color: theme === "light" ? COLORS.dark : COLORS.white },
          ]}
        >
          Welcome Back
        </Text>
        <Text
          style={[
            styles.smallText,
            { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
          ]}
        >
          Sign in to continue
        </Text>
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
                borderBottomColor:
                  theme === "light" ? COLORS.dark : COLORS.white,
                marginRight: 10,
                borderBottomWidth: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  color: theme === "light" ? COLORS.dark : COLORS.white,
                  marginRight: 3,
                  ...FONTS.fbody1,
                }}
              >
                +234
              </Text>
              <DropDown />
            </TouchableOpacity>
            <TextInput
              style={{
                flex: 1,
                borderBottomColor:
                  theme === "light" ? COLORS.dark : COLORS.white,
                borderBottomWidth: 1,
                height: SIZES.padding * 2.5,
                color: theme === "light" ? COLORS.dark : COLORS.white,
                ...FONTS.fbody1,
                paddingBottom: 3,
              }}
              onChangeText={(number) => setPhoneNumber(number)}
              defaultValue={phoneNumber}
              keyboardType="numeric"
              maxLength={10}
              placeholder="903 401 2507"
              placeholderTextColor={COLORS.greyMedium}
              selectionColor={theme === "light" ? COLORS.dark : COLORS.white}
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
                borderBottomColor:
                  theme === "light" ? COLORS.dark : COLORS.white,
                borderBottomWidth: 1,
                height: SIZES.padding * 2.5,
                color: theme === "light" ? COLORS.dark : COLORS.white,
                ...FONTS.fbody1,
                paddingBottom: 3,
              }}
              onChangeText={(email) => setEmailAddress(email)}
              defaultValue={emailAddress}
              placeholder="Oluwasholatemitayo@gmail.com"
              placeholderTextColor={COLORS.greyMedium}
              selectionColor={theme === "light" ? COLORS.dark : COLORS.white}
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
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
              borderBottomWidth: 1,
              height: SIZES.padding * 2.5,
              color: theme === "light" ? COLORS.dark : COLORS.white,
              ...FONTS.fbody1,
              paddingBottom: 3,
            }}
            onChangeText={(number) => setPassword(number)}
            defaultValue={password}
            placeholder="Enter your password"
            placeholderTextColor={COLORS.greyMedium}
            selectionColor={theme === "light" ? COLORS.dark : COLORS.white}
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
          <Button
            label="Login"
            containerStyle={{
              backgroundColor: COLORS.primary,
              paddingVertical: SIZES.padding2,
              paddingHorizontal: SIZES.padding2 * 5,
              borderRadius: SIZES.padding,
            }}
            onPress={() => navigation.navigate("Tabs")}
          />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: SIZES.padding * 4,
            }}
          >
            <Thumb />
            <Text
              style={{
                ...FONTS.fbody2,
                color: theme === "light" ? COLORS.dark : COLORS.white,
                marginTop: SIZES.padding,
              }}
            >
              Use Biometrics
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: SIZES.base * 7 }}>
          <Text
            style={{
              ...FONTS.fbody2,
              color: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            Don’t have an account yet?
          </Text>
          <Text
            style={{
              ...FONTS.fbody2,
              color: theme === "light" ? COLORS.dark : COLORS.white,
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.2 : 0,
  },

  bigText: {
    ...FONTS.h2Bold,
    marginLeft: SIZES.padding,
    marginTop: SIZES.padding2 * 1.5,
  },
  smallText: {
    ...FONTS.fbody1,
    marginLeft: SIZES.padding,
    marginTop: SIZES.padding2 * 1.5,
  },
});
export default Login;
