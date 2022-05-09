import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { COLORS, SIZES, FONTS, images, icons } from "../../constants";
import { Beneficiary, Button } from "../../components";
import { ChevronRight } from "../../assets/icons";

const ExpenseContent = ({ item }) => {
  return (
    <View>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.box, { marginTop: 35 }]}
        >
          <View>
            <Text style={styles.boxTitle}>Transfer Cash</Text>
            <Text style={styles.boxDescription}>
              Send money to local account or sub account
            </Text>
          </View>
          <ChevronRight />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.box}>
          <View>
            <Text style={styles.boxTitle}>Buy Airtime</Text>
            <Text style={styles.boxDescription}>
              Recharge your phone easily
            </Text>
          </View>
          <ChevronRight />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.box}>
          <View>
            <Text style={styles.boxTitle}>Pay Bills</Text>
            <Text style={styles.boxDescription}>
              Electricity bills, cables, etc.
            </Text>
          </View>
          <ChevronRight />
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>

      {/* beneficiaries */}
      <View>
        <View style={styles.beneficiaryHead}>
          <Text
            style={{
              color: COLORS.business,
              ...FONTS.h3Bold,
            }}
          >
            Saved Beneficiary
          </Text>
          <Button
            label={"View more"}
            labelStyle={{
              backgroundColor: COLORS.dark,
              paddingVertical: SIZES.padding / 2,
              paddingHorizontal: SIZES.padding2,
              ...FONTS.fbody2,
              fontSize: 10,
              lineHeight: 12.3,
              borderWidth: 0.5,
              borderColor: COLORS.white,
              borderRadius: SIZES.padding,
            }}
          />
        </View>
        <View>
          <Beneficiary />
        </View>
      </View>
    </View>
  );
};

export default ExpenseContent;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.greyDark,
    padding: SIZES.padding * 1.4,
    borderRadius: SIZES.base,
    marginTop: SIZES.padding * 2.7,
  },
  boxTitle: {
    color: COLORS.white,
    ...FONTS.h4Bold,
  },
  boxDescription: {
    color: COLORS.white,
    ...FONTS.fbody2,
    fontSize: 11,
    lineHeight: 14,
  },

  beneficiaryHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.padding * 5,
  },
});
