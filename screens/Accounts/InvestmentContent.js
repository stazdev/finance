import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";

import { COLORS, SIZES, FONTS, images, icons } from "../../constants";
import { Button } from "../../components";
import { LongArrowDark, LongArrowRight } from "../../assets/icons";
const listTab = [
  {
    id: 1,
    tab: "Portfolio",
  },
  {
    id: 2,
    tab: "Mature",
  },
];

const InvestmentContent = () => {
  const [tab, setTab] = React.useState("Portfolio");

  return (
    <View>
      <View style={styles.investmentBanner}>
        <Text style={styles.bannerHead}>Join other Billonaires</Text>
        <Text style={styles.bannerDescription}>
          Start investing in amazing investments with as low as 10,000
        </Text>
        <Button
          containerStyle={{
            backgroundColor: COLORS.white,
            flexDirection: "row",
            justifyContent: "center",
            AlignItems: "center",
            paddingHorizontal: SIZES.padding2,
            paddingVertical: SIZES.base,
            borderRadius: SIZES.padding,
          }}
          label={"Let's Go"}
          labelStyle={{
            color: COLORS.dark,
            ...FONTS.body2bold,
            marginRight: SIZES.padding,
          }}
          iconF={<LongArrowDark />}
        />
      </View>
      <View style={styles.listTab}>
        {listTab.map((list) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={list.id}
            style={[tab === list.tab]}
            onPress={() => setTab(list.tab)}
          >
            <Text style={styles.text}> {list.tab} </Text>
            {tab === list.tab && <View style={styles.tabActive} />}
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {tab == "Portfolio" ? (
          <View>
            <Text style={styles.title}>My Portfolio</Text>
            <View>
              <View style={{}}>
                <Text>Net Worth</Text>
                <Text>100,000</Text>
              </View>
              <View></View>
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>Mature Investments</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default InvestmentContent;

const styles = StyleSheet.create({
  investmentBanner: {
    backgroundColor: COLORS.secondary_dark,
    borderRadius: SIZES.padding,
    paddingVertical: SIZES.padding2 * 2,
    paddingHorizontal: SIZES.padding2,
    marginVertical: SIZES.padding * 4,
  },
  bannerHead: {
    color: COLORS.white,
    ...FONTS.h4Bold,
    fontSize: 22,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: SIZES.padding2,
  },
  bannerDescription: {
    color: COLORS.greyLight,
    ...FONTS.fbody1,
    fontSize: 16,
    textAlign: "center",
    marginBottom: SIZES.padding2,
  },

  listTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.padding * 4,
  },

  text: {
    ...FONTS.fbody1,
    color: COLORS.white,
  },
  tabActive: {
    paddingBottom: SIZES.base - 2,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.investment,
    width: 42,
    alignSelf: "center",
  },
  title: {
    color: COLORS.white,
    ...FONTS.h3Bold,
    marginTop: SIZES.padding2 * 3,
  },
});
