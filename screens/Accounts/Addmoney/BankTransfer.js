import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../../constants";
import { ChevronLeft, Copy } from "../../../assets/icons";

const BankTransfer = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        marginHorizontal: SIZES.padding,
        justifyContent: "center",
      }}
    >
      <StatusBar backgroundColor={COLORS.dark} barStyle={"light-content"} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
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
            color: COLORS.white,
            ...FONTS.h4Bold,
            marginLeft: SIZES.padding * 8,
          }}
        >
          Add Money
        </Text>
      </View>

      <View style={{ marginTop: SIZES.base * 4 }}>
        <Text style={styles.text}>
          Simply fund your 5QM account by transferring from any bank using the
          details below
        </Text>
      </View>

      <View>
        <View style={styles.detail}>
          <Text style={styles.detailText}>BANK</Text>
          <View style={styles.detailCard}>
            <Text style={styles.detailCardText}>5QM BANK</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.detail}>
          <Text style={styles.detailText}>ACCOUNT NUMBER</Text>
          <View
            style={[
              styles.detailCard,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}
          >
            <Text style={styles.detailCardText}>2022435405</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.detailCardText}>COPY </Text>
              <Copy />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.detail}>
          <Text style={styles.detailText}>ACCOUNT NAME</Text>
          <View style={styles.detailCard}>
            <Text style={styles.detailCardText}>Ogechi Desmond Anne</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BankTransfer;

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    ...FONTS.fbody2,
  },
  detailText: {
    color: COLORS.white,
    ...FONTS.body2bold,
    marginBottom: SIZES.padding / 2,
  },
  detail: {
    marginTop: SIZES.padding * 1.8,
  },
  detailCard: {
    backgroundColor: COLORS.greyDark,
    padding: SIZES.padding * 2,
    borderRadius: SIZES.padding,
  },
  detailCardText: {
    color: COLORS.white,
    ...FONTS.fbody2,
    fontSize: 13,
  },
});
