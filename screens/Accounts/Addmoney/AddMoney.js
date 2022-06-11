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

const AddMoney = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);
  const { item } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
        paddingHorizontal: SIZES.padding,
      }}
    >
      <StatusBar backgroundColor={COLORS.dark} barStyle={"light-content"} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: SIZES.padding,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <ChevronLeft />
        </TouchableOpacity>

        <Text
          style={{
            color: theme === "light" ? COLORS.dark : COLORS.white,
            ...FONTS.h4Bold,
            marginLeft: SIZES.padding * 8,
          }}
        >
          Add Money
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={[styles.card, { marginTop: SIZES.padding * 3 }]}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("BankTransfer", { item })}
        >
          <View>
            <Text style={styles.title}>Bank Transfer</Text>
            <Text style={styles.description}>
              Using internet banking or bank app
            </Text>
          </View>
          <ChevronRight />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("AddCard", { item })}
        >
          <View>
            <Text style={styles.title}>Card</Text>
            <Text style={styles.description}>Add money with a debit card</Text>
          </View>
          <ChevronRight />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View>
            <Text style={styles.title}>Cash Deposit</Text>
            <Text style={styles.description}>
              Deposit cash at a bank partner
            </Text>
          </View>
          <ChevronRight />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddMoney;

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
