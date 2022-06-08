import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import { COLORS, SIZES, FONTS, images, icons } from "../../constants";
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  LongArrowWhite,
  Notification,
  ToggleOff,
  ToggleOn,
} from "../../assets/icons";
import { Button, CustomModal } from "../../components";

const Profile = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  const [profileModal, setProfileModal] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7}>
          <Notification />
        </TouchableOpacity>
        <View>
          <Text
            style={theme == "dark" ? styles.headerText : styles.headerTextDark}
          >
            Accounts
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.replace("SignUp")}
        >
          <Text
            style={[
              styles.logoutText,
              { color: theme === "light" ? COLORS.dark : COLORS.white },
            ]}
          >
            Log out
          </Text>
          <LogOut />
        </TouchableOpacity>
      </View>
    );
  }

  function renderUser() {
    return (
      <View style={styles.user}>
        <View>
          <Image source={images.user} />
        </View>
        <View style={{ marginLeft: SIZES.padding * 3.4 }}>
          <Text
            style={[
              styles.headerText,
              { color: theme === "light" ? COLORS.dark : COLORS.white },
            ]}
          >
            Ogechi Desmond
          </Text>
          <Button
            label={"Edit profile"}
            labelStyle={{
              ...FONTS.fbody2,
              paddingHorizontal: SIZES.padding2,
              paddingVertical: SIZES.base / 4,
            }}
            containerStyle={{
              alignSelf: "flex-start",
              backgroundColor: COLORS.primary,
              color: COLORS.white,
              paddingHorizontal: SIZES.padding2,
              borderRadius: SIZES.radius,
              marginTop: SIZES.padding,
            }}
            onPress={() => setProfileModal(true)}
          />
        </View>
      </View>
    );
  }

  function renderAuth() {
    return (
      <View style={{ marginVertical: SIZES.padding2 * 2 }}>
        <View style={[styles.header, { marginBottom: SIZES.padding }]}>
          <View>
            <Text
              style={[
                styles.authText,
                { color: theme === "light" ? COLORS.dark : COLORS.white },
              ]}
            >
              Enable Pin
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setToggle(!toggle)}
          >
            {!toggle ? <ToggleOff /> : <ToggleOn />}
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <View>
            <Text
              style={[
                styles.authText,
                { color: theme === "light" ? COLORS.dark : COLORS.white },
              ]}
            >
              Enable Fingerprint/Face ID{" "}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setToggle1(!toggle1)}
          >
            {!toggle1 ? <ToggleOff /> : <ToggleOn />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderBanner() {
    return (
      <View
        style={[
          styles.header,
          {
            backgroundColor: COLORS.secondary_light,
            paddingVertical: SIZES.padding2,
            paddingHorizontal: SIZES.base,
            borderRadius: SIZES.padding,
          },
        ]}
      >
        <Image source={images.logoSmallest} />
        <View>
          <Text style={[styles.authText, { fontSize: 12.8, lineHeight: 15 }]}>
            JOIN THE BILLONAIRE COMMUNITY
          </Text>
        </View>
        <LongArrowWhite />
      </View>
    );
  }

  function renderOptions() {
    return (
      <View>
        <View>
          <View style={styles.optionHead}>
            <Text
              style={[
                styles.optionHeadText,
                { color: theme === "light" ? COLORS.primary : COLORS.white },
              ]}
            >
              ACCOUNT
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            <TouchableOpacity
              style={styles.header}
              onPress={() => navigation.navigate("KycInfo")}
            >
              <Text
                style={[
                  styles.optionText,
                  { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
                ]}
              >
                KYC Infomation
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text
                style={[
                  styles.optionText,
                  { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
                ]}
              >
                Card &amp; Bank settings
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text
                style={[
                  styles.optionText,
                  { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
                ]}
              >
                My 5QM ID
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text
                style={[
                  styles.optionText,
                  { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
                ]}
              >
                Affiliate &amp; Referrals
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.optionHead}>
            <Text
              style={[
                styles.optionHeadText,
                { color: theme === "light" ? COLORS.primary : COLORS.white },
              ]}
            >
              SECURITY
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text
                style={[
                  styles.optionText,
                  { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
                ]}
              >
                Change 5QM password
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text
                style={[
                  styles.optionText,
                  { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
                ]}
              >
                Change Transfer pin
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.optionHead}>
            <Text
              style={[
                styles.optionHeadText,
                { color: theme === "light" ? COLORS.primary : COLORS.white },
              ]}
            >
              5QM
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text
                style={[
                  styles.optionText,
                  { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
                ]}
              >
                KYC Infomation
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text
                style={[
                  styles.optionText,
                  { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
                ]}
              >
                Card &amp; Bank settings
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text
                style={[
                  styles.optionText,
                  { color: theme === "light" ? COLORS.dark : COLORS.greyLight },
                ]}
              >
                Affiliate &amp; Referrals
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderLogo() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: SIZES.padding * 4,
        }}
      >
        <Image source={images.logoSmall} />
      </View>
    );
  }

  function renderProfileModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={profileModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: SIZES.height,
              width: SIZES.width,
              padding: SIZES.base * 3,
              backgroundColor: COLORS.dark,
              borderRadius: SIZES.radius,
            }}
          >
            <TouchableOpacity
              onPress={() => setProfileModal(false)}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ChevronLeft />
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h3Bold,
                  marginLeft: SIZES.padding * 8,
                }}
              >
                Profile
              </Text>
            </TouchableOpacity>

            <View
              style={{
                alignItems: "center",
                marginTop: SIZES.padding2 * 2,
              }}
            >
              <Image source={images.user} />
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h4Bold,
                  fontSize: 20,
                  marginTop: SIZES.padding2,
                }}
              >
                Tap to change photo
              </Text>
            </View>

            <View style={{ marginTop: SIZES.base * 5 }}>
              <View style={styles.items}>
                <Text style={styles.left}>First Name</Text>
                <Text style={styles.right}>Ogechi</Text>
              </View>
              <View style={styles.items}>
                <Text style={styles.left}>Last Name</Text>
                <Text style={styles.right}>Desmond</Text>
              </View>
              <View style={styles.items}>
                <Text style={styles.left}>Date of Birth</Text>
                <Text style={styles.right}>13th July 1989</Text>
              </View>
            </View>

            <View style={{ marginTop: 35 }}>
              <Text style={{ ...FONTS.h4Bold, color: COLORS.greyMedium }}>
                Contact Information
              </Text>
            </View>

            <View style={{ marginTop: SIZES.base }}>
              <View style={styles.items}>
                <Text style={styles.left}>Phone Number</Text>
                <Text style={styles.right}>+2349035467237</Text>
              </View>
              <View style={styles.items}>
                <Text style={styles.left}>Email Address</Text>
                <Text style={styles.right}>ccltd@business.com</Text>
              </View>
            </View>

            <View style={{ alignItems: "center", marginTop: SIZES.base * 8 }}>
              <Image source={images.logoSmall} />
            </View>
          </View>
        </View>
      </CustomModal>
    );
  }

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: SIZES.padding,
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
      }}
    >
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderUser()}
        <Button
          label={"Change mode"}
          labelStyle={{ color: "white" }}
          onPress={handleThemeChange}
        />
        {renderAuth()}
        {renderBanner()}
        {renderOptions()}
        {renderLogo()}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderProfileModal()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: SIZES.padding,
  },

  headerText: {
    color: COLORS.white,
    ...FONTS.h4Bold,
  },

  headerTextDark: {
    color: COLORS.dark,
    ...FONTS.h4Bold,
  },

  logoutText: {
    ...FONTS.body1bold,
    marginRight: SIZES.padding,
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding * 4.3,
  },

  authText: {
    color: COLORS.white,
    ...FONTS.fbody2,
  },

  optionHead: {
    marginBottom: SIZES.padding2 / 2,
    marginTop: SIZES.padding * 2.5,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 0.25,
  },

  optionHeadText: {
    ...FONTS.h4Bold,
  },

  optionText: {
    ...FONTS.fbody2,
    paddingVertical: SIZES.padding * 0.4,
  },

  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.padding2,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 0.25,
  },
  left: {
    color: COLORS.white,
    ...FONTS.fbody2,
    fontSize: 12.8,
  },
  right: {
    color: COLORS.white,
    ...FONTS.h4Bold,
    fontSize: 17.78,
  },
});
