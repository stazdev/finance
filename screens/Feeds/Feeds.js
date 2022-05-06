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
import React from "react";
import { COLORS, SIZES, FONTS, images, icons } from "../../constants";

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
  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight * 0.2,
        flex: 1,
      }}
    >
      <View
        style={{
          borderBottomColor: COLORS.white,
          borderBottomWidth: 0.25,
        }}
      >
        <Text style={styles.headerText}>My 5QM Accounts</Text>
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
            <Text style={styles.sectionHead}>Creative Chaos News</Text>
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
            <Image source={icons.arrow} />
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              marginTop: SIZES.padding * 4.3,
            }}
          >
            <Text style={styles.sectionHead}>Financial Market News</Text>
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
            <Image source={icons.arrow} />
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              marginTop: SIZES.padding * 4.3,
            }}
          >
            <Text style={styles.sectionHead}>Tech News</Text>
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
            <Image source={icons.arrow} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: SIZES.padding * 4,
          }}
        >
          <Image source={images.logoSmall} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feeds;

const styles = StyleSheet.create({
  headerText: {
    ...FONTS.fbody1,
    color: COLORS.white,
    marginLeft: SIZES.padding * 2.1,
    marginBottom: SIZES.padding,
  },
  sectionHead: {
    ...FONTS.h4Bold,
    color: COLORS.white,
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
