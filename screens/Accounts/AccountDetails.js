import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import { Button } from "../../components";
import { Transaction } from "../../components";

const AccountDetails = ({ navigation, route }) => {
  const { item } = route.params;

  function renderHeader() {
    return (
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Image
            source={icons.chevronLeft}
            style={{ width: SIZES.base * 2, height: SIZES.base * 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={icons.info2}
            style={{ width: SIZES.base * 2, height: SIZES.base * 2 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  // detail that is related to all account screens
  function renderDetail() {
    return (
      <View style={styles.detailStyle}>
        <View>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h4Bold,
              paddingVertical: SIZES.padding,
            }}
          >
            {item.id === 5 || item.id === 6 ? item.name2 : item.name}
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.fh3,
            }}
          >
            {item.balance}
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.fbody2,
              fontSize: 11,
              lineHeight: 13.5,
              padding: SIZES.base,
              textAlign: "center",
            }}
          >
            {item.description2}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: SIZES.padding * 4.2,
          }}
        >
          <Button
            label={"ADD MONEY"}
            containerStyle={{
              backgroundColor: item.id === 1 ? COLORS.business : item.color,
              paddingHorizontal: SIZES.padding * 1.8,
              paddingVertical: SIZES.padding * 1.3,
              borderRadius: SIZES.base,
            }}
            labelStyle={{
              color: COLORS.greyDark,
              ...FONTS.body2bold,
            }}
          />
          <View style={{ width: SIZES.padding }}></View>
          <Button
            label={"WITHDRAW"}
            containerStyle={{
              backgroundColor: "transparent",
              paddingHorizontal: SIZES.padding * 1.8,
              paddingVertical: SIZES.padding * 1.3,
              borderRadius: SIZES.base,
              borderWidth: 1,
              borderColor: COLORS.white,
            }}
            labelStyle={{
              color: COLORS.white,
              ...FONTS.body2bold,
            }}
          />
        </View>
      </View>
    );
  }

  // unique details
  function renderOtherDetails() {
    return item.id === 1 || item.id === 6 ? (
      <View
        style={{
          marginBottom: SIZES.padding * 4,
          marginTop: SIZES.padding * 2,
        }}
      >
        {item.id === 1 && (
          <View>
            <Button
              label={"Turn on autosplit"}
              labelStyle={{
                ...FONTS.fbody1,
                color: COLORS.business,
                paddingVertical: SIZES.padding * 1.3,
                paddingHorizontal: SIZES.padding2 * 3,
              }}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: COLORS.business,
                borderWidth: 1,
                borderRadius: SIZES.radius / 2,
              }}
            />
            <Text
              style={{
                ...FONTS.fbody2,
                color: COLORS.white,
                textAlign: "center",
                marginTop: SIZES.base,
                marginBottom: SIZES.padding * 3.4,
              }}
            >
              Autosplit is off
            </Text>
          </View>
        )}
        <Text
          style={{
            ...FONTS.h3Bold,
            color: COLORS.business,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.greyMedium,
            paddingBottom: SIZES.padding / 2,
          }}
        >
          Recent Transaction
        </Text>
        <Transaction navigation={navigation} />
      </View>
    ) : (
      <View
        style={{
          marginBottom: 33,
        }}
      >
        <Text>Coming soon</Text>
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
      <StatusBar
        backgroundColor={COLORS.secondary}
        barStyle={"light-content"}
      />
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderDetail()}
        {renderOtherDetails()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  head: {
    marginHorizontal: SIZES.padding,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: SIZES.padding,
  },
  detailStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
