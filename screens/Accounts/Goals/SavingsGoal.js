import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context-store/context";
import { LinearGradient } from "expo-linear-gradient";

import { images, COLORS, SIZES, FONTS, icons } from "../../../constants";
import { LongArrowWhite } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";

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
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={{ marginLeft: SIZES.padding }}>
      <Image
        source={item.image}
        key={item.id}
        style={{
          width: 150,
          height: 171,
          borderRadius: SIZES.radius,
          marginRight: SIZES.padding2,
          marginTop: SIZES.padding * 4,
        }}
      />
      <View style={styles.cardNote}>
        <Text style={styles.cardText}>
          Create a Custom{"\n"}Plan{"  "}
          <LongArrowWhite />
        </Text>
      </View>
    </View>
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
        <Image
          source={theme === "light" ? images.logoSmallDark : images.logoSmall}
        />
      </View>
    );
  }

  return (
    <>
      <View>
        <Text
          style={[
            styles.heading,
            { color: theme === "light" ? COLORS.dark : COLORS.white },
          ]}
        >
          Your Active Goals
        </Text>
        <View style={styles.activeCards}>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CreateGoal")}
            >
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
            </TouchableOpacity>
            <View style={styles.cardNote}>
              <Text style={styles.cardText}>
                Create a Custom{"\n"}Plan{"  "}
                <LongArrowWhite />
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
        <Text
          style={[
            styles.heading,
            { color: theme === "light" ? COLORS.dark : COLORS.white },
          ]}
        >
          Explore Goals
        </Text>
        <Text
          style={{
            ...FONTS.fbody2,
            color: theme === "light" ? COLORS.dark : "#cfcfcf",
            marginTop: SIZES.base,
            paddingLeft: SIZES.padding,
          }}
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
    paddingLeft: SIZES.padding,
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
