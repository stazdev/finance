import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { COLORS, SIZES, FONTS, icons } from "../constants";
import { Delete } from "../assets/icons";
const beneficiaries = [
  {
    id: 1,
    name: "Abisola Oluwataiwo",
    bank: "GTBank Plc",
    account_number: "0781524346",
  },
  {
    id: 2,
    name: "John Ayomide",
    bank: "UnionBank",
    account_number: "0781524346",
  },
  {
    id: 3,
    name: "Ronke Omotayo",
    bank: "UBA",
    account_number: "0781524346",
  },
  {
    id: 4,
    name: "Igbayilolo Owonikoko",
    bank: "Zenith bank",
    account_number: "0781524346",
  },
  {
    id: 5,
    name: "Abisola Oluwataiwo",
    bank: "GTBank Plc",
    account_number: "0781524346",
  },
];

const Beneficiary = () => {
  const [list, setList] = React.useState(beneficiaries);

  function handleRemove(id) {
    console.log(id);
  }

  function renderList() {
    return beneficiaries.map((beneficiary) => (
      <View key={beneficiary.id} style={styles.benefitCard}>
        <View>
          <Text style={styles.beneficiaryName}>{beneficiary.name} </Text>
          <Text style={styles.accountDetail}>
            {beneficiary.bank} - {beneficiary.account_number}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleRemove(beneficiary.id)}
        >
          <Delete />
        </TouchableOpacity>
      </View>
    ));
  }

  return (
    <View style={{ marginVertical: SIZES.padding2 * 2 }}>{renderList()}</View>
  );
};

export default Beneficiary;

const styles = StyleSheet.create({
  benefitCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.padding / 2,
  },
  beneficiaryName: {
    color: COLORS.greyLight,
    ...FONTS.h4Bold,
  },
  accountDetail: {
    color: COLORS.greyMedium,
    ...FONTS.fbody2,
    marginTop: SIZES.base / 2,
  },
});
