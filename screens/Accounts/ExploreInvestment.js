import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import { COLORS, SIZES, FONTS, images, icons } from "../../constants";
import { Button } from "../../components";
import { ChevronLeft, SearchIcon } from "../../assets/icons";

const explore = [
  {
    id: 1,
    image: images.adron,
    title: "CC Homes",
    roi: "10%",
    duration: 18,
    investors: 2000,
    unit: 10000,
    type: "Fixed Income",
    payout: "Capital+Profit",
    startDate: "17th aug 2022",
    endDate: "17th aug 2022",
    partner: "leadsea assurance",
    description:
      "Real estate investing refers to the purchase of property as an investment to generate income rather than using it as a primary residence. In simple terms, it can be understood as any land, building, infrastructure and other tangible property which is usually immovable but transferable.",
  },
  {
    id: 2,
    image: images.adron,
    title: "CC Homes",
    roi: "10%",
    duration: 18,
    investors: 2000,
    unit: 10000,
    type: "Fixed Income",
    payout: "Capital+Profit",
    startDate: "17th aug 2022",
    endDate: "17th aug 2022",
    partner: "leadsea assurance",
    description:
      "Real estate investing refers to the purchase of property as an investment to generate income rather than using it as a primary residence. In simple terms, it can be understood as any land, building, infrastructure and other tangible property which is usually immovable but transferable.",
  },
  {
    id: 3,
    image: images.adron,
    title: "CC Homes",
    roi: "10%",
    duration: 18,
    investors: 2000,
    unit: 10000,
    type: "Fixed Income",
    payout: "Capital+Profit",
    startDate: "17th aug 2022",
    endDate: "17th aug 2022",
    partner: "leadsea assurance",
    description:
      "Real estate investing refers to the purchase of property as an investment to generate income rather than using it as a primary residence. In simple terms, it can be understood as any land, building, infrastructure and other tangible property which is usually immovable but transferable.",
  },
  {
    id: 4,
    image: images.adron,
    title: "CC Homes",
    roi: "10%",
    duration: 18,
    investors: 2000,
    unit: 10000,
    type: "Fixed Income",
    payout: "Capital+Profit",
    startDate: "17th aug 2022",
    endDate: "17th aug 2022",
    partner: "leadsea assurance",
    description:
      "Real estate investing refers to the purchase of property as an investment to generate income rather than using it as a primary residence. In simple terms, it can be understood as any land, building, infrastructure and other tangible property which is usually immovable but transferable.",
  },
  {
    id: 5,
    image: images.adron,
    title: "CC Homes",
    roi: "10%",
    duration: 18,
    investors: 2000,
    unit: 10000,
    type: "Fixed Income",
    payout: "Capital+Profit",
    startDate: "17th aug 2022",
    endDate: "17th aug 2022",
    partner: "leadsea assurance",
    description:
      "Real estate investing refers to the purchase of property as an investment to generate income rather than using it as a primary residence. In simple terms, it can be understood as any land, building, infrastructure and other tangible property which is usually immovable but transferable.",
  },
  {
    id: 6,
    image: images.adron,
    title: "CC Homes",
    roi: "10%",
    duration: 18,
    investors: 2000,
    unit: 10000,
    type: "Fixed Income",
    payout: "Capital+Profit",
    startDate: "17th aug 2022",
    endDate: "17th aug 2022",
    partner: "leadsea assurance",
    description:
      "Real estate investing refers to the purchase of property as an investment to generate income rather than using it as a primary residence. In simple terms, it can be understood as any land, building, infrastructure and other tangible property which is usually immovable but transferable.",
  },
];

const ExploreInvestment = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft />
        </TouchableOpacity>
        <Text style={styles.headerText}>Explore Investments</Text>
      </View>
    );
  }

  function renderSearch() {
    return (
      <View
        style={[
          styles.search,
          {
            borderBottomColor:
              theme === "light" ? COLORS.dark : COLORS.greyLight,
          },
        ]}
      >
        <SearchIcon />
        <TextInput
          style={{
            width: "90%",
            color: COLORS.white,
            ...FONTS.fbody2,
            fontSize: 13,
          }}
          placeholder="Search"
          placeholderTextColor={COLORS.greyMedium}
        />
      </View>
    );
  }

  function renderExplore() {
    const renderItem = ({ item, i }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("ExploreInvestmentDetail", { item })
          }
        >
          <View
            style={{
              borderRadius: SIZES.padding,
              marginVertical: SIZES.padding2 / 2,
              marginHorizontal: SIZES.padding2 / 2,
            }}
          >
            <Image
              source={item.image}
              key={item.id}
              style={{
                width: 167,
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
                width: 167,
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
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <FlatList
          data={explore}
          keyExtractor={explore.id}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
      }}
    >
      {renderHeader()}
      {renderSearch()}
      {renderExplore()}
    </SafeAreaView>
  );
};

export default ExploreInvestment;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.padding,
  },
  headerText: {
    color: COLORS.white,
    ...FONTS.h4Bold,
    marginLeft: SIZES.padding * 5,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.greyLight,
    padding: SIZES.base,
    marginHorizontal: SIZES.padding,
    marginBottom: 5,
  },
  text: {
    ...FONTS.fbody1,
    color: COLORS.white,
  },
});
