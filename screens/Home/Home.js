import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  Animated,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useContext } from "react";
import { COLORS, FONTS, SIZES, icons, images, accounts } from "../../constants";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Transaction } from "../../components";
import { ThemeContext } from "../../context-store/context";

import {
  MoneyBill,
  Notification,
  BriefCase,
  Savings,
  Expense,
  Investment,
  Emergency,
  Naira,
  ArrowCircleFilled,
} from "../../assets/icons";

const Home = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              ...FONTS.fbody1,
              color: theme === "light" ? COLORS.greyDark : COLORS.greyLight,
            }}
          >
            Good Morning
          </Text>
          <Text
            style={{
              ...FONTS.h3Bold,
              color: theme === "light" ? COLORS.dark : COLORS.white,
            }}
          >
            Desmond
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <Button
              label={"Referral CTA"}
              labelStyle={{
                color: theme === "light" ? COLORS.white : COLORS.greyDark,
                ...FONTS.fbody2,
              }}
              containerStyle={{
                backgroundColor:
                  theme === "light" ? COLORS.primary : COLORS.white,
                paddingVertical: SIZES.base / 2,
                paddingHorizontal: SIZES.padding2 + 10,
                borderRadius: SIZES.radius - 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ marginLeft: SIZES.padding2 }}
            onPress={() => navigation.navigate("Message")}
          >
            <Notification />
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
            width: SIZES.width * 0.75 - 25,
            height: SIZES.width / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          activeOpacity={0.7}
          onPress={() => console.log(item.description)}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.icon}
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: SIZES.padding2,
            }}
          >
            <Naira fill={COLORS.white} />
            <Text
              style={{
                ...FONTS.fh3,
                color: COLORS.white,
                marginLeft: SIZES.padding,
              }}
            >
              {item.balance}
            </Text>
          </View>
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
          (x, i) => i * (SIZES.width * 0.75 - 16) + (i - 1) * 12
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
          <Text
            style={{
              ...FONTS.fbody1,
              color: COLORS.greyMedium,
              marginTop: SIZES.base,
            }}
          >
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
            <Text
              style={{
                ...FONTS.fbody1,
                color: theme === "light" ? COLORS.dark : COLORS.greyLight,
              }}
            >
              KYC Information
            </Text>
            <Text
              style={{
                ...FONTS.fbody2,
                color: theme === "light" ? COLORS.greyDark : COLORS.greyMedium,
              }}
            >
              Update your ID card and important docs.
            </Text>
          </View>
          <ArrowCircleFilled />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                ...FONTS.fbody1,
                color: theme === "light" ? COLORS.dark : COLORS.greyLight,
              }}
            >
              Fund your account
            </Text>
            <Text
              style={{
                ...FONTS.fbody2,
                color: theme === "light" ? COLORS.greyDark : COLORS.greyMedium,
              }}
            >
              Fund you account to see how money split works
            </Text>
          </View>
          <ArrowCircleFilled />
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
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
      }}
    >
      <StatusBar backgroundColor={COLORS.dark} barStyle={"light-content"} />
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
