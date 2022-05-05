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
import React from "react";
import { COLORS, SIZES, FONTS, images, icons } from "../../constants";

const Info = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Account")}
        >
          <Image source={icons.chevronLeft} />
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
              color: COLORS.white,
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
            backgroundColor: "#c4c4c4",
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
        paddingTop: StatusBar.currentHeight * 1.5,
        marginHorizontal: SIZES.padding,
        flex: 1,
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
            color: COLORS.white,
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
