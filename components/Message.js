import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context-store/context";
import { COLORS, FONTS, SIZES } from "../constants";
import { Button } from "../components";
import { ChevronLeft, NotImg } from "../assets/icons";

const messages = [
  {
    id: 1,
    title: "New Article",
    image: <NotImg />,
    desc: "These are four (4) tips you should follow when investing in stocks",
  },
  {
    id: 2,
    title: "New Article",
    image: <NotImg />,
    desc: "These are four (4) tips you should follow when investing in stocks",
  },
  {
    id: 3,
    title: "New Article",
    image: <NotImg />,
    desc: "These are four (4) tips you should follow when investing in stocks",
  },
  {
    id: 4,
    title: "New Article",
    image: <NotImg />,
    desc: "These are four (4) tips you should follow when investing in stocks",
  },
  {
    id: 5,
    title: "New Article",
    image: <NotImg />,
    desc: "These are four (4) tips you should follow when investing in stocks",
  },
];

const Message = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  function renderheader() {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomColor: COLORS.white,
          borderBottomWidth: 0.25,
          paddingVertical: SIZES.padding,
        }}
      >
        <ChevronLeft />
        <Text
          style={{
            color: theme === "light" ? COLORS.dark : COLORS.white,
            ...FONTS.h3Bold,
            marginLeft: SIZES.padding * 5,
          }}
        >
          NOTIFICATION
        </Text>
      </TouchableOpacity>
    );
  }

  function renderCard() {
    return (
      <View>
        {messages.map((message) => (
          <View key={message.id} style={styles.card}>
            <Text style={styles.title}>{message.title}</Text>
            <View>{message.image}</View>
            <Text style={styles.desc}>{message.desc}</Text>
            <Button
              label={"READ"}
              labelStyle={{ fontSize: 11.8, lineHeight: 13.11 }}
              containerStyle={{
                backgroundColor: COLORS.primary,
                paddingVertical: SIZES.base / 2,
                paddingHorizontal: SIZES.base * 3,
                borderRadius: SIZES.radius,
                marginTop: SIZES.base - 2,
              }}
            />
          </View>
        ))}
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
      }}
    >
      {renderheader()}
      <ScrollView style={{ marginBottom: 20 }}>{renderCard()}</ScrollView>
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondary_light,
  },

  title: {
    color: COLORS.white,
    ...FONTS.h4Bold,
    fontSize: 20,
  },

  desc: {
    color: COLORS.white,
    ...FONTS.fbody1,
    fontSize: 11.8,
    lineHeight: 14.51,
  },
});
