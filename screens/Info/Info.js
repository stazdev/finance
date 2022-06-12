import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import { COLORS, SIZES, FONTS, images, icons } from "../../constants";
import { ChevronLeft } from "../../assets/icons";

const Info = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft />
        </TouchableOpacity>
      </View>
    );
  }

  function renderInput() {
    return (
      <View>
        <View>
          <Text
            style={{
              color: theme === "light" ? COLORS.dark : COLORS.white,
              ...FONTS.h4Bold,
              marginTop: SIZES.padding * 4.3,
              marginBottom: SIZES.padding,
            }}
          >
            Introduction
          </Text>
        </View>
        <View
          style={{
            backgroundColor: theme === "light" ? COLORS.dark : COLORS.greyLight,
          }}
        >
          <TextInput multiline={true} numberOfLines={6} />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight * 0.2,
        paddingHorizontal: SIZES.padding,
        flex: 1,
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
      }}
    >
      {renderHeader()}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: SIZES.padding * 2.5,
        }}
      >
        <Text
          style={{
            color: theme === "light" ? COLORS.dark : COLORS.white,
            ...FONTS.h4Bold,
          }}
        >
          Why Five Accounts
        </Text>
      </View>
      {renderInput()}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 63,
        }}
      >
        <Image
          style={{
            alignSelf: "center",
          }}
          source={images.logoSmall}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: SIZES.padding2,
  },
});
