import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import { ChevronLeft } from "../../assets/icons";
import { ThemeContext } from "../../context-store/context";

const Receipt = ({ navigation, route }) => {
  const { item } = route.params;
  const { theme } = useContext(ThemeContext);

  function renderHeader() {
    return (
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <ChevronLeft />
        </TouchableOpacity>
        <Text
          style={[
            styles.title,
            { color: theme === "light" ? COLORS.dark : COLORS.white },
          ]}
        >
          Receipt
        </Text>
        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.btnText}>Share</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderDate() {
    return (
      <View style={styles.time}>
        <Text
          style={[
            styles.timeText,
            { color: theme === "light" ? COLORS.dark : COLORS.white },
          ]}
        >
          {" "}
          {item.time}{" "}
        </Text>
      </View>
    );
  }
  function renderDetail() {
    return (
      <>
        <View
          style={[
            styles.divider,
            {
              borderBottomColor:
                theme === "light" ? COLORS.dark : COLORS.greyLight,
            },
          ]}
        >
          <Text
            style={[
              styles.amount,
              { color: theme === "light" ? COLORS.dark : COLORS.white },
            ]}
          >
            {" "}
            {item.amount}{" "}
          </Text>
          <Text
            style={[
              styles.name,
              { color: theme === "light" ? COLORS.dark : COLORS.white },
            ]}
          >
            {" "}
            {item.status === "Credit" ? item.from : item.beneficiary}{" "}
          </Text>
        </View>

        <View
          style={[
            styles.divider,
            {
              borderBottomColor:
                theme === "light" ? COLORS.dark : COLORS.greyLight,
            },
          ]}
        >
          {item.status === "Credit" ? (
            <View>
              <View>
                <Text
                  style={[
                    styles.name,
                    {
                      paddingBottom: SIZES.padding2,
                      color: theme === "light" ? COLORS.dark : COLORS.white,
                    },
                  ]}
                >
                  From
                </Text>
              </View>
              <View style={{ marginLeft: -8 }}>
                <Text
                  style={[
                    styles.subName,
                    { color: theme === "light" ? COLORS.dark : COLORS.white },
                  ]}
                >
                  {" "}
                  {item.bank}{" "}
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <View>
                <Text
                  style={[
                    styles.name,
                    {
                      paddingBottom: SIZES.padding2,
                      color: theme === "light" ? COLORS.dark : COLORS.white,
                    },
                  ]}
                >
                  To
                </Text>
              </View>
              <View style={{ marginLeft: -8 }}>
                <Text
                  style={[
                    styles.subName,
                    { color: theme === "light" ? COLORS.dark : COLORS.white },
                  ]}
                >
                  {" "}
                  {item.bank}{" "}
                </Text>
              </View>
            </View>
          )}
        </View>

        <View
          style={[
            styles.divider,
            {
              borderBottomColor:
                theme === "light" ? COLORS.dark : COLORS.greyLight,
            },
          ]}
        >
          <View>
            <Text
              style={[
                styles.name,
                {
                  paddingBottom: SIZES.padding2,
                  color: theme === "light" ? COLORS.dark : COLORS.white,
                },
              ]}
            >
              Action
            </Text>
          </View>
          <View>
            {item.status === "Credit" ? (
              <Text
                style={[
                  styles.subName,
                  { color: theme === "light" ? COLORS.dark : COLORS.white },
                ]}
              >
                Money Received
              </Text>
            ) : (
              <Text
                style={[
                  styles.subName,
                  { color: theme === "light" ? COLORS.dark : COLORS.white },
                ]}
              >
                Money Sent
              </Text>
            )}
          </View>
        </View>

        <View
          style={[
            styles.divider,
            {
              borderBottomColor:
                theme === "light" ? COLORS.dark : COLORS.greyLight,
            },
          ]}
        >
          <View>
            <Text
              style={[
                styles.name,
                {
                  paddingBottom: SIZES.padding2,
                  color: theme === "light" ? COLORS.dark : COLORS.white,
                },
              ]}
            >
              {" "}
              Description{" "}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.subName,
                { color: theme === "light" ? COLORS.dark : COLORS.white },
              ]}
            >
              {" "}
              {item.description}{" "}
            </Text>
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
        paddingTop: StatusBar.currentHeight * 0.2,
        paddingHorizontal: SIZES.padding,
      }}
    >
      <StatusBar backgroundColor={COLORS.dark} barStyle={"light-content"} />
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
    ...FONTS.fbody1,
  },

  divider: {
    paddingVertical: SIZES.padding * 1.3,
    borderBottomWidth: 0.5,
  },

  amount: {
    ...FONTS.fh3,
  },
  name: {
    ...FONTS.h4Bold,
  },
  subName: {
    ...FONTS.fh4,
  },
});
