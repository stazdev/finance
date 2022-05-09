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
import React, { useState } from "react";
import { COLORS, SIZES, FONTS, images, icons } from "../../constants";
import {
  ChevronRight,
  LogOut,
  LongArrowWhite,
  Notification,
  ToggleOff,
  ToggleOn,
} from "../../assets/icons";
import { Button } from "../../components";

const Profile = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  function renderHeader() {
    return (
      <View style={[styles.header, { marginBottom: SIZES.padding }]}>
        <TouchableOpacity activeOpacity={0.7}>
          <Notification />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.replace("SignUp")}
        >
          <Text style={styles.logoutText}>Log out</Text>
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
          <Text style={styles.headerText}>Ogechi Desmond</Text>
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
          />
        </View>
      </View>
    );
  }

  function renderAuth() {
    return (
      <View style={{ marginVertical: SIZES.padding2 * 2 }}>
        <View style={[styles.header, { marginBottom: SIZES.padding * 2 }]}>
          <View>
            <Text style={styles.authText}>Enable Pin</Text>
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
            <Text style={styles.authText}>Enable Fingerprint/Face ID </Text>
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
            <Text style={styles.optionHeadText}>ACCOUNT</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text style={styles.optionText}>KYC Infomation</Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text style={styles.optionText}>Card &amp; Bank settings</Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text style={styles.optionText}>My 5QM ID</Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text style={styles.optionText}>Affiliate &amp; Referrals</Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.optionHead}>
            <Text style={styles.optionHeadText}>SECURITY</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text style={styles.optionText}>Change 5QM password</Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text style={styles.optionText}>Change Transfer pin</Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.optionHead}>
            <Text style={styles.optionHeadText}>5QM</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text style={styles.optionText}>KYC Infomation</Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text style={styles.optionText}>Card &amp; Bank settings</Text>
              <ChevronRight />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <TouchableOpacity style={styles.header}>
              <Text style={styles.optionText}>Affiliate &amp; Referrals</Text>
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
  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight * 0.2,
        marginHorizontal: SIZES.padding * 1.5,
        flex: 1,
      }}
    >
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderUser()}
        {renderAuth()}
        {renderBanner()}
        {renderOptions()}
        {renderLogo()}
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
  },

  headerText: {
    color: COLORS.white,
    ...FONTS.h4Bold,
  },

  logoutText: {
    color: COLORS.white,
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
    color: COLORS.white,
  },

  optionText: {
    ...FONTS.fbody2,
    color: COLORS.greyLight,
    paddingVertical: SIZES.padding * 1,
  },
});
