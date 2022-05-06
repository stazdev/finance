import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { images, COLORS, SIZES, FONTS, icons } from "../../constants";

const goals = [
  {
    id: 1,
    image: images.house,
    description: "Buy a House\nPlan",
  },
  {
    id: 2,
    image: images.house,
    description: "Buy a House\nPlan",
  },
  {
    id: 3,
    image: images.house,
    description: "Buy a House\nPlan",
  },
];

const SavingsGoal = () => {
  const renderItem = ({ item }) => (
    <>
      <Image
        source={item.image}
        key={item.id}
        style={{
          width: 150,
          height: 171,
          borderRadius: SIZES.radius,
          marginRight: SIZES.padding2 * 2,
          marginTop: SIZES.padding * 4,
        }}
      />
      <View style={styles.cardNote}>
        <Text style={styles.cardText}>
          Create a Custom{"\n"}Plan{"  "}
          <Image
            source={icons.arrow}
            resizeMode={"contain"}
            style={{ tintColor: COLORS.white, marginLeft: SIZES.padding }}
          />
        </Text>
      </View>
    </>
  );

  function renderLogo() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: SIZES.padding * 4,
        }}
      >
        <Image source={images.logoSmall} />
      </View>
    );
  }

  return (
    <>
      <View>
        <Text style={styles.heading}>Your Active Goals</Text>
        <View style={styles.activeCards}>
          <View>
            <LinearGradient
              colors={[COLORS.primary, COLORS.secondary_light]}
              style={{
                width: 150,
                height: 171,
                borderRadius: SIZES.radius,
                alignItems: "center",
              }}
            >
              <Image
                source={images.circlePlus}
                resizeMode={"contain"}
                style={{ marginTop: SIZES.padding2 }}
              />
            </LinearGradient>
            <View style={styles.cardNote}>
              <Text style={styles.cardText}>
                Create a Custom{"\n"}Plan{"  "}
                <Image
                  source={icons.arrow}
                  resizeMode={"contain"}
                  style={{ tintColor: COLORS.white, marginLeft: SIZES.padding }}
                />
              </Text>
            </View>
          </View>
          <View style={{ width: SIZES.padding2 * 2 }}></View>
          <View>
            <Image
              source={images.house}
              resizeMode={"cover"}
              style={{
                width: 150,
                height: 171,
                borderRadius: SIZES.radius,
              }}
            />
            <View style={styles.cardNote}>
              <Text style={styles.cardText}>Buy a House{"\n"}Plan</Text>
              <Text style={styles.cardAmount}>#100,000</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.heading}>Explore Goals</Text>
        <Text
          style={{ ...FONTS.fbody2, color: "#cfcfcf", marginTop: SIZES.base }}
        >
          Tap on any of the goals to to create a new goal.
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={goals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        {renderLogo()}
      </View>
    </>
  );
};

export default SavingsGoal;

const styles = StyleSheet.create({
  activeCards: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.padding2 * 2,
  },
  heading: {
    ...FONTS.h4Bold,
    color: COLORS.white,
    marginTop: SIZES.padding2 * 5 + 2,
  },
  cardNote: {
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.secondary_light,
    padding: SIZES.base,
    borderBottomLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
  },

  cardText: {
    color: COLORS.greyLight,
    ...FONTS.body2bold,
  },
  cardAmount: {
    color: COLORS.greyLight,
    ...FONTS.fh4,
    fontSize: 10.5,
    lineHeight: 12.8,
  },
});
