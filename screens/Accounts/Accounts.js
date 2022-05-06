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
import AccountDetails from "./AccountDetails";

const accounts = [
  {
    id: 1,
    name: "Main Balance",
    description: "The sum total of all\n your account balance",
    description2: "The sum total of all your account balance",
    balance: "#100,000",
    color: COLORS.white,
  },
  {
    id: 2,
    name: "Business Wallet",
    description: "The sum total of all\n your account balance",
    description2:
      "This is a cash account for you to put back into your business. Recieve and transfer funds for free",
    balance: "#100,000",
    color: COLORS.business,
  },
  {
    id: 3,
    name: "Savings Wallet",
    description: "The sum total of all\n your account balance",
    description2: "Bulids your savings daily, weekly or monthly",
    balance: "#100,000",
    color: COLORS.savings,
  },
  {
    id: 4,
    name: "Expense Wallet",
    description: "The sum total of all\n your account balance",
    description2: "Add money to your expense wallet. Buy data, pay bills etc.",
    balance: "#100,000",
    color: COLORS.expense,
  },
  {
    id: 5,
    name: "Investment\n Wallet",
    name2: "Investment Wallet",
    description: "The sum total of all\n your account balance",
    description2: "Grow your money by investing in 5QM endorsed businesses",
    balance: "#100,000",
    color: COLORS.investment,
  },
  {
    id: 6,
    name: "Emergency\n Wallet",
    name2: "Emergency Wallet",
    description: "The sum total of all\n your account balance",
    description2: "Store up money for unforseen circumstances",
    balance: "#100,000",
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
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.card}
        onPress={() => navigation.navigate("AccountDetails", { item })}
      >
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
        paddingTop: StatusBar.currentHeight * 0.2,
        marginHorizontal: SIZES.padding,
        justifyContent: "center",
      }}
    >
      <StatusBar
        backgroundColor={COLORS.secondary}
        barStyle={"light-content"}
      />
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
    fontSize: 11,
    lineHeight: 13.5,
  },
});
