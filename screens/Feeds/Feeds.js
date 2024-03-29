import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import { COLORS, SIZES, FONTS, images, icons } from "../../constants";
import { LongArrowRight } from "../../assets/icons";

const datas = [
  {
    title: "Midnight Business Palava",
    description: "Last night, 25th feb 2055, Sir Desh shook tables of...",
  },
  {
    title: "What’s new to 5QM",
    description: "Lorem ipsum dolor sit amet, consectetur adipis...",
  },
];

const Feeds = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
        flex: 1,
      }}
    >
      <View
        style={{
          borderBottomColor: theme === "light" ? COLORS.dark : COLORS.white,
          borderBottomWidth: 0.25,
          paddingVertical: SIZES.padding,
        }}
      >
        <Text
          style={[
            styles.headerText,
            { color: theme === "light" ? COLORS.dark : COLORS.white },
          ]}
        >
          FEEDS
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: SIZES.padding * 1.7 }}
      >
        <View>
          <View
            style={{
              marginTop: SIZES.padding * 4.3,
            }}
          >
            <Text
              style={[
                styles.sectionHead,
                { color: theme === "light" ? COLORS.primary : COLORS.white },
              ]}
            >
              Creative Chaos News
            </Text>
          </View>
          {datas.map((item, index) => (
            <View style={styles.card} key={index}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.titleDescription}>{item.description}</Text>
            </View>
          ))}
          <TouchableOpacity activeOpacity={0.7} style={styles.touchable}>
            <Text style={{ color: COLORS.primary, marginRight: SIZES.padding }}>
              View More
            </Text>
            <LongArrowRight />
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              marginTop: SIZES.padding * 4.3,
            }}
          >
            <Text
              style={[
                styles.sectionHead,
                { color: theme === "light" ? COLORS.primary : COLORS.white },
              ]}
            >
              Financial Market News
            </Text>
          </View>
          {datas.map((item, index) => (
            <View style={styles.card} key={index}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.titleDescription}>{item.description}</Text>
            </View>
          ))}
          <TouchableOpacity activeOpacity={0.7} style={styles.touchable}>
            <Text style={{ color: COLORS.primary, marginRight: SIZES.padding }}>
              View More
            </Text>
            <LongArrowRight />
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              marginTop: SIZES.padding * 4.3,
            }}
          >
            <Text
              style={[
                styles.sectionHead,
                { color: theme === "light" ? COLORS.primary : COLORS.white },
              ]}
            >
              Tech News
            </Text>
          </View>
          {datas.map((item, index) => (
            <View style={styles.card} key={index}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.titleDescription}>{item.description}</Text>
            </View>
          ))}
          <TouchableOpacity activeOpacity={0.7} style={styles.touchable}>
            <Text style={{ color: COLORS.primary, marginRight: SIZES.padding }}>
              View More
            </Text>
            <LongArrowRight />
          </TouchableOpacity>
        </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feeds;

const styles = StyleSheet.create({
  headerText: {
    ...FONTS.fbody1,
    paddingLeft: SIZES.padding * 2.1,
    paddingVertical: SIZES.padding,
  },
  sectionHead: {
    ...FONTS.h4Bold,
    marginBottom: SIZES.padding * 0.7,
  },
  card: {
    backgroundColor: COLORS.secondary_light,
    marginBottom: SIZES.padding,
    borderRadius: SIZES.padding,
    padding: SIZES.padding,
  },
  titleText: {
    ...FONTS.body1bold,
    color: COLORS.greyLight,
    marginBottom: SIZES.padding,
  },
  titleDescription: {
    ...FONTS.fbody2,
    color: COLORS.greyMedium,
  },
  touchable: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
