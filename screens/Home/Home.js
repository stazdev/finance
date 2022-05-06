import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  Animated,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Transaction } from "../../components";

const Home = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const accounts = [
    {
      id: 1,
      icon: icons.main,
      description: "Main Balance",
      balance: 10000,
      back: COLORS.main,
    },
    {
      id: 2,
      icon: icons.buss,
      description: "Business Wallet",
      balance: 20000,
      back: COLORS.linear2,
    },
    {
      id: 3,
      icon: icons.save,
      description: "Savings Wallet",
      balance: 10000,
      back: COLORS.savings,
    },
    {
      id: 4,
      icon: icons.expense,
      description: "Expense Wallet",
      balance: 10000,
      back: COLORS.expense,
    },
    {
      id: 5,
      icon: icons.invest,
      description: "Investment Wallet",
      balance: 10000,
      back: COLORS.investment,
    },
    {
      id: 6,
      icon: icons.emer,
      description: "Emergency Wallet",
      balance: 10000,
      back: COLORS.emergency,
    },
  ];

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding2,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{ ...FONTS.fbody1, color: COLORS.greyLight }}>
            Good Morning
          </Text>
          <Text style={{ ...FONTS.h3Bold, color: COLORS.white }}>Desmond</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: COLORS.white,
                paddingVertical: SIZES.base / 2,
                paddingHorizontal: SIZES.padding2 + 10,
                borderRadius: SIZES.radius - 5,
              }}
            >
              Referral CTA
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.lightGray,
              borderRadius: 50,
            }}
          >
            <Image
              source={icons.notifi}
              resizeMode="contain"
              style={{
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderSlider() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: item.back,
            marginHorizontal: SIZES.base,
            borderRadius: SIZES.radius,
            width: SIZES.width * 0.8 - 20,
            height: SIZES.width / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          activeOpacity={0.7}
          onPress={() => console.log(item.description)}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={item.icon} />
            <Text
              style={{
                ...FONTS.fbody1,
                marginLeft: SIZES.padding,
                color: COLORS.greyLight,
              }}
            >
              {item.description}
            </Text>
          </View>
          <Text
            style={{
              ...FONTS.fh3,
              color: COLORS.white,
              marginTop: SIZES.padding * 2,
            }}
          >{`# ${item.balance}`}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={accounts}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"start"}
        scrollEventThrottle={16}
        decelerationRate="fast"
        bounces={false}
        snapToOffsets={[...Array(accounts.length)].map(
          (x, i) => i * (SIZES.width * 0.8 - 10) + (i - 1) * 10
        )}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding * 2 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    );
  }

  function renderAbout() {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.greyDark,
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding2,
          borderRadius: SIZES.radius,
        }}
      >
        <View
          style={{
            paddingVertical: SIZES.padding2 * 2,
          }}
        >
          <Text style={{ ...FONTS.h3Bold, color: COLORS.white }}>
            What is 5QM?
          </Text>
          <Text style={{ ...FONTS.fbody1, color: COLORS.greyMedium }}>
            All you need to know
          </Text>
        </View>
        <Image
          source={images.money2}
          style={{
            width: 77,
            height: 77,
            borderRadius: 50,
          }}
        />
      </View>
    );
  }

  function renderSetup() {
    return (
      <View>
        <View
          style={{
            borderBottomColor: COLORS.greyMedium,
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              ...FONTS.h3Bold,
              color: COLORS.primary,
              marginTop: SIZES.base * 3,
              paddingBottom: SIZES.base,
            }}
          >
            Setup Guide
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: SIZES.base * 2,
          }}
        >
          <View>
            <Text style={{ ...FONTS.fbody1, color: COLORS.greyLight }}>
              KYC Information
            </Text>
            <Text style={{ ...FONTS.fbody2, color: COLORS.greyMedium }}>
              Update your ID card and important docs.
            </Text>
          </View>
          <Image source={icons.arrowcircle} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ ...FONTS.fbody1, color: COLORS.greyLight }}>
              Fund your account
            </Text>
            <Text style={{ ...FONTS.fbody2, color: COLORS.greyMedium }}>
              Fund you account to see how money split works
            </Text>
          </View>
          <Image source={icons.arrowcircle} />
        </View>
      </View>
    );
  }

  function renderTransaction() {
    return (
      <View
        style={{
          marginVertical: 33,
        }}
      >
        <Text
          style={{
            ...FONTS.h3Bold,
            color: COLORS.primary,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.greyMedium,
            paddingBottom: SIZES.padding / 2,
          }}
        >
          Recent Transaction
        </Text>
        <Transaction navigation={navigation} />
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight * 0.2,
      }}
    >
      <StatusBar
        backgroundColor={COLORS.secondary}
        barStyle={"light-content"}
      />
      {renderHeader()}
      <ScrollView>
        {renderSlider()}
        <View style={{ marginHorizontal: SIZES.padding }}>
          {renderAbout()}
          {renderSetup()}
          {renderTransaction()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
