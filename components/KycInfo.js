import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Camera, ChevronDown, ChevronLeft } from "../assets/icons";
import { COLORS, FONTS, SIZES } from "../constants";
import { Button } from "../components";

const KycInfo = ({ navigation }) => {
  const [residence, setResidence] = useState("Select state");
  const [origin, setOrigin] = useState("Select state");
  const [addressText, setAddressText] = useState("");
  function renderHeader() {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomColor: COLORS.white,
          borderBottomWidth: 0.25,
          paddingBottom: SIZES.base / 2,
        }}
      >
        <ChevronLeft />
        <Text
          style={{
            color: "#0018f0",
            ...FONTS.h4Bold,
            marginLeft: SIZES.padding * 5,
          }}
        >
          KYC INFORMATION
        </Text>
      </TouchableOpacity>
    );
  }

  function renderUpload() {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.uploadCard}>
        <Camera />
        <Text style={styles.uploadText}>
          Upload Valid ID (Intl. passport, NIN, Drivers license, voters card)
        </Text>
      </TouchableOpacity>
    );
  }

  function renderAddress() {
    return (
      <View>
        <View style={styles.addressCard}>
          <Text style={styles.addressText}>State of residence</Text>
          <View style={styles.addressInput}>
            <TextInput
              placeholder={residence}
              placeholderTextColor={COLORS.greyMedium}
              style={styles.input}
            />
            <ChevronDown />
          </View>
        </View>

        <View style={styles.addressCard}>
          <Text style={styles.addressText}>Residential address</Text>
          <View style={[styles.addressInput]}>
            <TextInput
              placeholder="Enter Address"
              placeholderTextColor={COLORS.greyMedium}
              style={[
                styles.input,
                { height: 95, justifyContent: "flex-start" },
              ]}
              multiline={true}
              numberOfLines={4}
              onChangeText={(e) => setAddressText(e)}
              defaultValue={addressText}
            />
          </View>
        </View>

        <View style={styles.addressCard}>
          <Text style={styles.addressText}>State of origin</Text>
          <View style={styles.addressInput}>
            <TextInput
              placeholder={origin}
              placeholderTextColor={COLORS.greyMedium}
              style={styles.input}
            />
            <ChevronDown />
          </View>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      {renderHeader()}
      <ScrollView style={{ marginHorizontal: SIZES.padding }}>
        {renderUpload()}
        {renderAddress()}
        <Button
          label={"UPDATE"}
          containerStyle={{
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.padding2 * 5,
            paddingVertical: SIZES.padding2,
            borderRadius: SIZES.padding,
            marginTop: SIZES.base * 8,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default KycInfo;

const styles = StyleSheet.create({
  uploadText: {
    color: COLORS.white,
    ...FONTS.body2bold,
    textAlign: "center",
    marginTop: SIZES.base / 2,
  },
  uploadCard: {
    backgroundColor: COLORS.secondary_light,
    alignItems: "center",
    paddingHorizontal: SIZES.padding * 4.5,
    paddingTop: SIZES.padding2,
    paddingBottom: SIZES.padding2 * 2,
    marginVertical: SIZES.base * 3,
    borderRadius: SIZES.padding,
  },
  addressText: {
    color: COLORS.white,
    ...FONTS.body2bold,
    marginBottom: SIZES.padding / 2,
  },
  addressInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    padding: SIZES.padding,
    borderRadius: SIZES.padding,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  addressCard: {
    marginVertical: SIZES.padding,
  },
  input: { width: "90%", color: COLORS.white, ...FONTS.body1bold },
});
