import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import { COLORS, SIZES, FONTS, images } from "../../constants";
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

const investments = [
  {
    id: 1,
    image: images.house,
    title: "CC Homes",
    roi: "10% ROI in 18 months",
    investors: 2000,
    unit: 10000,
  },
  {
    id: 2,
    image: images.house,
    title: "Cassava Plantation",
    roi: "10% ROI in 18 months",
    investors: 2000,
    unit: 10000,
  },
  {
    id: 3,
    image: images.house,
    title: "Adron Real Estate",
    roi: "10% ROI in 18 months",
    investors: 2000,
    unit: 10000,
  },
];

const maturedInvestments = [
  {
    id: 1,
    image: images.house,
    title: "Adron Real Estate",
    roi: "10% ROI in 18 months",
    investors: 2000,
    unit: 10000,
  },
];

const InvestmentContent = () => {
  const navigation = useNavigation();
  const [tab, setTab] = React.useState("Portfolio");
  const { theme } = useContext(ThemeContext);

  const renderMatured = ({ item }) => (
    <View
      style={{
        borderRadius: SIZES.padding,
        marginVertical: SIZES.padding * 4,
        marginHorizontal: SIZES.padding2 / 2,
      }}
    >
      <View>
        <Image
          source={item.image}
          key={item.id}
          style={{
            width: 170,
            height: 92,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
          }}
        />
        <View
          style={{
            backgroundColor: COLORS.secondary_light,
            borderBottomLeftRadius: SIZES.padding,
            borderBottomRightRadius: SIZES.padding,
            padding: SIZES.padding,
            width: 170,
          }}
        >
          <View>
            <Text style={[styles.text, { ...FONTS.body1bold }]}>
              {item.title}
            </Text>
            <Text style={[styles.text, { ...FONTS.fbody2, fontSize: 8 }]}>
              {item.roi}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.padding * 1.4,
            }}
          >
            <View>
              <Text style={[styles.text, { ...FONTS.fbody1 }]}>
                {item.investors}
              </Text>
              <Text style={[styles.text, { ...FONTS.fbody1, fontSize: 8 }]}>
                Investors
              </Text>
            </View>
            <View>
              <Text style={[styles.text, { ...FONTS.fbody1 }]}>
                {item.unit}
              </Text>
              <Text style={[styles.text, { ...FONTS.fbody1, fontSize: 8 }]}>
                Per Unit
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <View
      style={{
        borderRadius: SIZES.padding,
        marginVertical: SIZES.padding * 4,
        marginHorizontal: SIZES.padding2 / 2,
      }}
    >
      <View>
        <Image
          source={item.image}
          key={item.id}
          style={{
            width: 170,
            height: 92,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
          }}
        />
        <View
          style={{
            backgroundColor: COLORS.secondary_light,
            borderBottomLeftRadius: SIZES.padding,
            borderBottomRightRadius: SIZES.padding,
            padding: SIZES.padding,
            width: 170,
          }}
        >
          <View>
            <Text style={[styles.text, { ...FONTS.body1bold }]}>
              {item.title}
            </Text>
            <Text style={[styles.text, { ...FONTS.fbody2, fontSize: 8 }]}>
              {item.roi}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.padding * 1.4,
            }}
          >
            <View>
              <Text style={[styles.text, { ...FONTS.fbody1 }]}>
                {item.investors}
              </Text>
              <Text style={[styles.text, { ...FONTS.fbody1, fontSize: 8 }]}>
                Investors
              </Text>
            </View>
            <View>
              <Text style={[styles.text, { ...FONTS.fbody1 }]}>
                {item.unit}
              </Text>
              <Text style={[styles.text, { ...FONTS.fbody1, fontSize: 8 }]}>
                Per Unit
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ paddingHorizontal: SIZES.padding }}>
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
          onPress={() => navigation.navigate("ExploreInvestment")}
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
            <Text
              style={[
                styles.text,
                { color: theme === "light" ? COLORS.dark : COLORS.white },
              ]}
            >
              {" "}
              {list.tab}{" "}
            </Text>
            {tab === list.tab && <View style={styles.tabActive} />}
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {tab == "Portfolio" ? (
          <View>
            <Text
              style={[
                styles.title,
                { color: theme === "light" ? COLORS.dark : COLORS.white },
              ]}
            >
              My Portfolio
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: SIZES.padding * 2,
              }}
            >
              <View
                style={[
                  styles.investmentCardContainer,
                  {
                    borderColor: theme === "light" ? COLORS.dark : COLORS.white,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.investmentHead,
                    { color: theme === "light" ? COLORS.dark : COLORS.white },
                  ]}
                >
                  Net Worth
                </Text>
                <Text style={{ color: COLORS.investment, ...FONTS.fh4 }}>
                  100,000
                </Text>
              </View>
              <View style={{ width: SIZES.padding2 }} />
              <View
                style={[
                  styles.investmentCardContainer,
                  {
                    borderColor: theme === "light" ? COLORS.dark : COLORS.white,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.investmentHead,
                    { color: theme === "light" ? COLORS.dark : COLORS.white },
                  ]}
                >
                  Active Investments
                </Text>
                <Text
                  style={{
                    color: theme === "light" ? COLORS.dark : COLORS.white,
                    ...FONTS.fh4,
                  }}
                >
                  {investments.length}
                </Text>
              </View>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={investments}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        ) : (
          <View>
            <Text style={{ color: COLORS.white, ...FONTS.fh4 }}>
              {maturedInvestments.length}
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={maturedInvestments}
              renderItem={renderMatured}
              keyExtractor={(item) => item.id}
            />
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
  investmentHead: {
    color: COLORS.white,
    ...FONTS.fbody2,
    marginBottom: SIZES.padding2,
    fontSize: 12.5,
  },
  investmentCardContainer: {
    width: 150,
    padding: SIZES.base,
    borderWidth: 0.5,
    borderColor: COLORS.white,
    borderRadius: SIZES.radius,
  },
  text: {
    color: COLORS.white,
  },
});
