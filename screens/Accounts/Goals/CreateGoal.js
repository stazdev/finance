import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../context-store/context";
import { ChevronLeft } from "../../../assets/icons";
import { COLORS, FONTS, images, SIZES } from "../../../constants";
import { Button } from "../../../components";

const CreateGoal = ({ navigation }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  function renderHeader() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.pop()}
        style={{ paddingVertical: SIZES.padding }}
      >
        <ChevronLeft />
      </TouchableOpacity>
    );
  }

  function renderContent() {
    return (
      <View>
        <View>
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h3Bold,
              marginTop: SIZES.radius,
            }}
          >
            Before you continue
          </Text>
          <Text
            style={{ color: COLORS.greyMedium, ...FONTS.fbody1, fontSize: 16 }}
          >
            Here are a few things to note.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 39,
            marginHorizontal: SIZES.padding,
          }}
        >
          <View
            style={{
              width: 4,
              height: 4,
              borderRadius: SIZES.radius,
              backgroundColor:
                theme === "light" ? COLORS.dark : COLORS.greyLight,
              marginRight: SIZES.padding,
              marginTop: -25,
            }}
          />
          <Text
            style={{
              color: theme === "light" ? COLORS.dark : COLORS.white,
              ...FONTS.body2bold,
              paddingHorizontal: SIZES.base,
            }}
          >
            Pls ensure you are saving your money for a convenient duration. If
            you decide to withdraw these funds before the stipulated time, a 2%
            charge would apply
          </Text>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View>
        <Button
          label={"CONTINUE"}
          containerStyle={{
            paddingHorizontal: SIZES.padding * 11,
            paddingVertical: SIZES.padding,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.padding / 2,
            marginTop: 13,
          }}
          onPress={() => navigation.navigate("GoalCreator")}
        />
      </View>
    );
  }

  function renderLogo() {
    return (
      <View style={{ marginTop: SIZES.height * 0.4 }}>
        <Image
          source={theme === "light" ? images.logoSmallDark : images.logoSmall}
          style={{ alignSelf: "center" }}
        />
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
      }}
    >
      {renderHeader()}
      {renderContent()}
      {renderButton()}
      {renderLogo()}
    </SafeAreaView>
  );
};

export default CreateGoal;

const styles = StyleSheet.create({});
