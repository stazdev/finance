import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, images, icons } from "../../constants";

const accounts = [
  {
    name: "Main Balance",
    description: "The sum total of all \n your account balance",
    balance: 100000,
    color: COLORS.white,
  },
  {
    name: "Business Wallet",
    description: "The sum total of all \n your account balance",
    balance: 100000,
    color: COLORS.business,
  },
  {
    name: "Savings Wallet",
    description: "The sum total of all \n your account balance",
    balance: 100000,
    color: COLORS.savings,
  },
  {
    name: "Expense Wallet",
    description: "The sum total of all \n your account balance",
    balance: 100000,
    color: COLORS.expense,
  },
  {
    name: "Investment \n Wallet",
    description: "The sum total of all \n your account balance",
    balance: 100000,
    color: COLORS.investment,
  },
  {
    name: "Emergency \n Wallet",
    description: "The sum total of all \n your account balance",
    balance: 100000,
    color: COLORS.emergency,
  },
];
const Accounts = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.headerAlign}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Home")}
          >
            <Image source={icons.chevronLeft} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>5QM ACCOUNTS</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Info")}
        >
          <Image source={icons.info2} />
        </TouchableOpacity>
      </View>
    );
  }

  function renderImages() {
    return <View style={styles.Images}></View>;
  }

  const renderItem = ({ item, i }) => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.card}>
        <View>
          <Text
            style={{
              color: item.color,
              ...FONTS.fh4,
              fontSize: 15,
              lineHeight: 18,
              marginBottom: SIZES.padding,
            }}
          >
            {" "}
            {item.name}{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}> {item.description} </Text>
        </View>
        <View>
          <Text
            style={{
              color: item.color,
              ...FONTS.fh4,
              fontSize: 15,
              lineHeight: 18,
              marginTop: SIZES.padding * 4,
            }}
          >
            {" "}
            {item.balance}{" "}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  function renderAccounts() {
    return (
      <View>
        <FlatList
          data={accounts}
          keyExtractor={(account, i) => i.toString()}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    );
  }

  function renderLogo() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: SIZES.padding * 7,
        }}
      >
        <Image source={images.logoSmall} />
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight * 1.5,
        marginHorizontal: SIZES.padding,
        justifyContent: "center",
      }}
    >
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderImages()}
        {renderAccounts()}
        {renderLogo()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: SIZES.padding2,
  },
  headerAlign: {
    flexDirection: "row",
  },
  headerText: {
    ...FONTS.h3Bold,
    color: COLORS.white,
    marginLeft: SIZES.padding,
  },
  Images: {
    height: SIZES.base * 9,
    backgroundColor: COLORS.greyDark,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.padding * 3.3,
  },

  card: {
    flex: 1,
    margin: SIZES.padding / 2,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 3,
    borderRadius: SIZES.radius - 5,
    backgroundColor: COLORS.greyDark,
    width: SIZES.width / 2,
  },
  "card:nth-child-odd": {
    marginLeft: 0,
  },
  "card:nth-child-even": {
    marginRight: 0,
  },
  cardDescription: {
    color: COLORS.white,
    ...FONTS.fh4,
    fontSize: SIZES.h4Regular / 2,
    lineHeight: 14,
  },
});
