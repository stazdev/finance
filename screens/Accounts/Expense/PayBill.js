import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Cable, ChevronLeft, Electricity, Wifi } from "../../../assets/icons";
import { COLORS, FONTS, SIZES } from "../../../constants";

const items = [
  {
    id: 1,
    icon: <Wifi />,
    title: "Internet",
  },
  {
    id: 2,
    icon: <Electricity />,
    title: "Internet",
  },
  {
    id: 3,
    icon: <Cable />,
    title: "Internet",
  },
];

const PayBill = ({ navigation }) => {
  function renderHeader() {
    return (
      <View>
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
            fontWeight: "300",
            marginVertical: SIZES.padding2 * 2,
          }}
        >
          What bill would you love to pay?
        </Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <View>{item.icon}</View>
        <Text style={styles.cardText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  function renderBills() {
    return (
      <View>
        <FlatList
          data={items}
          keyExtractor={(item, i) => i.toString()}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ paddingHorizontal: SIZES.padding }}>
      {renderHeader()}
      {renderBills()}
    </SafeAreaView>
  );
};

export default PayBill;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: SIZES.padding / 2,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 3,
    borderRadius: SIZES.radius - 5,
    backgroundColor: COLORS.greyDark,
    width: SIZES.width / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  "card:nth-child-odd": {
    marginLeft: 0,
  },
  "card:nth-child-even": {
    marginRight: 0,
  },

  cardText: {
    color: COLORS.white,
    ...FONTS.fbody1,
    marginTop: SIZES.radius,
  },
});
