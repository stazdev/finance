import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";

const Receipt = ({ navigation, route }) => {
  const { item } = route.params;

  function renderHeader() {
    return (
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          activeOpacity={0.7}
        >
          <Image
            source={icons.chevronLeft}
            style={{ width: SIZES.base * 2, height: SIZES.base * 2 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Receipt</Text>
        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.btnText}>Share</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderDate() {
    return (
      <View style={styles.time}>
        <Text style={styles.timeText}> {item.time} </Text>
      </View>
    );
  }
  function renderDetail() {
    return (
      <>
        <View style={styles.divider}>
          <Text style={styles.amount}> {item.amount} </Text>
          <Text style={styles.name}>
            {" "}
            {item.status === "Credit" ? item.from : item.beneficiary}{" "}
          </Text>
        </View>

        <View style={styles.divider}>
          {item.status === "Credit" ? (
            <View>
              <View>
                <Text style={[styles.name, { paddingBottom: SIZES.padding2 }]}>
                  From
                </Text>
              </View>
              <View style={{ marginLeft: -8 }}>
                <Text style={styles.subName}> {item.bank} </Text>
              </View>
            </View>
          ) : (
            <View>
              <View>
                <Text style={[styles.name, { paddingBottom: SIZES.padding2 }]}>
                  To
                </Text>
              </View>
              <View style={{ marginLeft: -8 }}>
                <Text style={styles.subName}> {item.bank} </Text>
              </View>
            </View>
          )}
        </View>

        <View style={styles.divider}>
          <View>
            <Text style={[styles.name, { paddingBottom: SIZES.padding2 }]}>
              Action
            </Text>
          </View>
          <View>
            {item.status === "Credit" ? (
              <Text style={styles.subName}>Money Received</Text>
            ) : (
              <Text style={styles.subName}>Money Sent</Text>
            )}
          </View>
        </View>

        <View style={styles.divider}>
          <View>
            <Text style={[styles.name, { paddingBottom: SIZES.padding2 }]}>
              {" "}
              Description{" "}
            </Text>
          </View>
          <View>
            <Text style={styles.subName}> {item.description} </Text>
          </View>
        </View>
      </>
    );
  }

  function renderBtn() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: SIZES.padding2 * 7,
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
        paddingHorizontal: SIZES.padding,
      }}
    >
      {renderHeader()}
      {renderDate()}
      {renderDetail()}
      {renderBtn()}
    </SafeAreaView>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    ...FONTS.h4Bold,
  },
  shareBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
  },
  btnText: {
    color: COLORS.white,
    ...FONTS.h4Bold,
    paddingVertical: SIZES.padding / 2,
    paddingHorizontal: SIZES.padding * 1.3,
  },
  time: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.padding2 * 5,
  },
  timeText: {
    color: COLORS.white,
    ...FONTS.fbody1,
  },

  divider: {
    paddingVertical: SIZES.padding * 1.3,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.greyLight,
  },

  amount: {
    ...FONTS.fh3,
    color: COLORS.white,
  },
  name: {
    ...FONTS.h4Bold,
    color: COLORS.white,
  },
  subName: {
    ...FONTS.fh4,
    color: COLORS.white,
  },
});
