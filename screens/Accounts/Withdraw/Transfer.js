import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context-store/context";
import { ChevronLeft, ChevronRight } from "../../../assets/icons";
import { COLORS, FONTS, SIZES } from "../../../constants";

const Transfer = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);

  const { item } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight * 0.2,
        paddingHorizontal: SIZES.padding,
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
      }}
    >
      <StatusBar backgroundColor={COLORS.dark} barStyle={"light-content"} />
      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
        <ChevronLeft />
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          style={[styles.card, { marginTop: SIZES.padding * 5 }]}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("LocalTransfer", { item })}
        >
          <View>
            <Text style={styles.title}>Local Transfer</Text>
            <Text style={styles.description}>Send money to local account</Text>
          </View>
          <ChevronRight />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("InternalTransfer", { item })}
        >
          <View>
            <Text style={styles.title}>Sub Account Transfer</Text>
            <Text style={styles.description}>
              Send money to between 5QM wallets
            </Text>
          </View>
          <ChevronRight />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.greyDark,
    marginBottom: SIZES.padding * 3,
    padding: SIZES.padding,
    borderRadius: SIZES.padding,
  },
  title: {
    color: COLORS.white,
    ...FONTS.h4Bold,
    fontSize: 20,
  },
  description: {
    color: COLORS.greyLight,
    ...FONTS.fbody2,
    fontSize: 11,
  },
});
