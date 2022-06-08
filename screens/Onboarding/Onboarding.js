import React from "react";

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { images, COLORS, SIZES, FONTS } from "../../constants";
import { Button } from "../../components";

const onboarding_screens = [
  {
    id: 1,
    bannerImage: images.amico,
    title: "Welcome to Banking Reimagined",
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
    bannerImage: images.rafiki,
    title: "Enjoy up to 15% interests on investments",
  },
  {
    id: 5,
    bannerImage: images.pana,
    title: "Enjoy the support of a active community",
  },
];

const Onboarding = ({ navigation }) => {
  const scrollX = new Animated.Value(0);
  const listRef = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  // const viewChangeRef = React.useRef(({ viewableItems, changed }) => {
  //   setCurrentIndex(viewableItems[0].index);
  // });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.white, COLORS.primary, COLORS.white],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                width: 30,
                height: 5,
                borderRadius: SIZES.radius,
                backgroundColor: dotColor,
                marginHorizontal: 6,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View>
        {/* pagination */}
        <View style={{ justifyContent: "center" }}>
          <Dots />
        </View>
        {/* button */}
        <View
          style={{
            marginVertical: SIZES.padding2 * 7,
          }}
        >
          <Button
            containerStyle={{
              paddingVertical: SIZES.padding - 1,
              paddingHorizontal: SIZES.padding2 * 5 + 2,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              ...FONTS.fbody1,
            }}
            onPress={() => {
              let index = Math.ceil(Number(scrollX._value / SIZES.width));
              if (index < onboarding_screens.length - 1) {
                // scroll to next item
                listRef?.current?.scrollToIndex({
                  index: index + 1,
                  animated: true,
                });
              } else {
                navigation.replace("SignUp");
              }
            }}
            label={"Next"}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.secondary}
        barStyle={"light-content"}
      />
      <Animated.FlatList
        ref={listRef}
        horizontal
        pagingEnabled
        data={onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        // onViewableItemsChanged={viewChangeRef.current}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.center}>
              {item.id === 2 ? (
                <View>
                  <LinearGradient
                    colors={[COLORS.primary, COLORS.secondary_light]}
                    style={[
                      styles.linearGradient,
                      {
                        marginTop: -SIZES.height * 0.1,
                        alignSelf: "center",
                        justifyContent: "center",
                      },
                    ]}
                    start={{ x: -0.4, y: 0.1 }}
                  >
                    <Text
                      style={[
                        styles.gradientText,
                        { marginBottom: SIZES.padding },
                      ]}
                    >
                      INCOME{"\n"}ACCOUNT
                    </Text>
                    <Text style={styles.gradientText}>#100,000</Text>
                  </LinearGradient>

                  <View
                    style={{
                      position: "relative",
                      bottom: -SIZES.height * 0.25,
                    }}
                  >
                    <Text style={{ color: COLORS.white, ...FONTS.h3Bold }}>
                      One Account...
                    </Text>
                  </View>
                </View>
              ) : item.id === 3 ? (
                <View
                  style={[
                    {
                      marginTop: -SIZES.height * 0.1,
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View>
                    <LinearGradient
                      colors={[COLORS.primary, COLORS.secondary_light]}
                      style={[
                        styles.linearGradient,
                        {
                          position: "absolute",
                          top: 20,
                          left: 50,
                          marginTop: 50,
                        },
                      ]}
                      start={{ x: -0.4, y: 0.1 }}
                    >
                      <Text
                        style={[
                          styles.gradientText,
                          {
                            marginBottom: SIZES.padding,
                          },
                        ]}
                      >
                        Business{"\n"}Account
                      </Text>
                      <Text style={styles.gradientText}># 20,000</Text>
                    </LinearGradient>

                    <LinearGradient
                      colors={[COLORS.primary, COLORS.secondary_light]}
                      style={[
                        styles.linearGradient,
                        {
                          position: "absolute",
                          right: 50,
                          top: 20,
                          marginTop: 50,
                        },
                      ]}
                      start={{ x: -0.4, y: 0.1 }}
                    >
                      <Text
                        style={[
                          styles.gradientText,
                          {
                            marginBottom: SIZES.padding,
                          },
                        ]}
                      >
                        Investment{"\n"}Account
                      </Text>
                      <Text
                        style={[
                          styles.gradientText,
                          { alignSelf: "flex-start" },
                        ]}
                      >
                        # 20,000
                      </Text>
                    </LinearGradient>

                    <LinearGradient
                      colors={[COLORS.primary, COLORS.secondary_light]}
                      style={[
                        styles.linearGradient,
                        {
                          position: "absolute",
                          right: -50,
                          bottom: -50,
                        },
                      ]}
                      start={{ x: -0.4, y: 0.1 }}
                    >
                      <Text
                        style={[
                          styles.gradientText,
                          { marginBottom: SIZES.padding },
                        ]}
                      >
                        Savings{"\n"}Account
                      </Text>
                      <Text style={styles.gradientText}># 20,000</Text>
                    </LinearGradient>

                    <LinearGradient
                      colors={[COLORS.primary, COLORS.secondary_light]}
                      style={[
                        styles.linearGradient,
                        {
                          position: "absolute",
                          left: 50,
                          bottom: 20,
                          marginBottom: 50,
                        },
                      ]}
                      start={{ x: -0.4, y: 0.1 }}
                    >
                      <Text
                        style={[
                          styles.gradientText,
                          {
                            marginBottom: SIZES.padding,
                          },
                        ]}
                      >
                        Expense{"\n"}Account
                      </Text>
                      <Text style={styles.gradientText}># 20,000</Text>
                    </LinearGradient>

                    <LinearGradient
                      colors={[COLORS.primary, COLORS.secondary_light]}
                      style={[
                        styles.linearGradient,
                        {
                          position: "absolute",
                          right: 50,
                          bottom: 20,
                          marginBottom: 50,
                        },
                      ]}
                      start={{ x: -0.4, y: 0.1 }}
                    >
                      <Text
                        style={[
                          styles.gradientText,
                          { marginBottom: SIZES.padding },
                        ]}
                      >
                        Emergency{"\n"}Account
                      </Text>
                      <Text
                        style={[
                          styles.gradientText,
                          { alignSelf: "flex-start" },
                        ]}
                      >
                        # 20,000
                      </Text>
                    </LinearGradient>
                  </View>

                  <View
                    style={{
                      position: "absolute",
                      bottom: -SIZES.height * 0.33,
                      right: -100,
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.white,
                        ...FONTS.h3Bold,
                        alignSelf: "center",
                      }}
                    >
                      ...that splits into 5{" "}
                    </Text>
                  </View>
                </View>
              ) : (
                <View>
                  <View>
                    <Image
                      source={item.bannerImage}
                      resizeMode="contain"
                      style={{ alignSelf: "center" }}
                    />
                  </View>
                  <View>
                    <Text style={styles.text}>{item.title}</Text>
                  </View>
                </View>
              )}
            </View>
          );
        }}
      />

      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    paddingTop: SIZES.height * 0.1,
    backgroundColor: COLORS.secondary,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SIZES.width,
  },
  text: {
    ...FONTS.h2Bold,
    color: COLORS.white,
    textAlign: "center",
    marginTop: SIZES.base * 5,
    marginBottom: SIZES.font * 5,
  },

  gradientText: {
    color: COLORS.white,
    ...FONTS.fbody2,
  },
  linearGradient: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 104,
    height: 95,
    borderRadius: SIZES.radius,
  },
});

export default Onboarding;
