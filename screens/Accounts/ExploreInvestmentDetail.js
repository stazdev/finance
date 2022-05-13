import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES, images } from "../../constants";
import {
  ChevronDown,
  ChevronLeft,
  ToggleOff,
  ToggleOn,
} from "../../assets/icons";
import { Button, CustomModal } from "../../components";

const sources = [
  {
    id: 1,
    value: "Use Investment wallet",
  },
  {
    id: 2,
    value: "Use bank card   **** 1505 ",
  },
];

const ExploreInvestmentDetail = ({ navigation, route }) => {
  const { item } = route.params;
  const [modalVisibility, setModalVisibility] = useState(false);
  const [sourceModal, setSourceModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [selected, setSelected] = useState(1);

  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft />
        </TouchableOpacity>
        <Text style={styles.headerText}>{item.title}</Text>
      </View>
    );
  }

  function renderImage() {
    return (
      <Image
        source={item.image}
        resizeMode="contain"
        style={{ width: 334, height: 144, marginTop: SIZES.base * 5 }}
      />
    );
  }

  function renderDescription() {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: SIZES.padding * 1.7,
          }}
        >
          <Text
            style={{
              backgroundColor: COLORS.investment,
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: SIZES.radius,
              ...FONTS.h4Bold,
              fontSize: 14.5,
            }}
          >
            5QM verified
          </Text>
          <View>
            <Text
              style={[
                styles.text,
                { ...FONTS.h4Bold, fontSize: 14.5, fontWeight: "700" },
              ]}
            >
              Cost/unit
            </Text>
            <Text
              style={{
                color: COLORS.investment,
                ...FONTS.h4Bold,
                fontSize: 14.5,
              }}
            >
              {item.unit}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              styles.text,
              {
                ...FONTS.h4Bold,
                fontSize: 14.5,
                fontWeight: "700",
                paddingVertical: SIZES.padding2,
              },
            ]}
          >
            About This Investment
          </Text>
          <Text
            style={[
              styles.text,
              {
                ...FONTS.h4Bold,
                fontSize: 14.5,
                fontWeight: "400",
                lineHeight: 16.2,
              },
            ]}
          >
            {item.description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: SIZES.padding * 5,
          }}
        >
          <View style={{ width: 150 }}>
            <View>
              <Text
                style={[
                  styles.text,
                  { ...FONTS.h4Bold, fontSize: 14.5, fontWeight: "700" },
                ]}
              >
                Investment Duration
              </Text>
              <Text
                style={{
                  color: COLORS.investment,
                  ...FONTS.h4Bold,
                  fontSize: 14.5,
                }}
              >
                {item.duration} months
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.text,
                  { ...FONTS.h4Bold, fontSize: 14.5, fontWeight: "700" },
                ]}
              >
                Investment type
              </Text>
              <Text
                style={{
                  color: COLORS.investment,
                  ...FONTS.h4Bold,
                  fontSize: 14.5,
                }}
              >
                {item.type}
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.text,
                  { ...FONTS.h4Bold, fontSize: 14.5, fontWeight: "700" },
                ]}
              >
                Offer starts
              </Text>
              <Text
                style={{
                  color: COLORS.investment,
                  ...FONTS.h4Bold,
                  fontSize: 14.5,
                }}
              >
                {item.startDate}
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.text,
                  { ...FONTS.h4Bold, fontSize: 14.5, fontWeight: "700" },
                ]}
              >
                Insurance partner
              </Text>
              <Text
                style={{
                  color: COLORS.investment,
                  ...FONTS.h4Bold,
                  fontSize: 14.5,
                }}
              >
                {item.partner}
              </Text>
            </View>
          </View>

          <View style={{ width: 150 }}>
            <View>
              <Text
                style={[
                  styles.text,
                  { ...FONTS.h4Bold, fontSize: 14.5, fontWeight: "700" },
                ]}
              >
                Interst to earn
              </Text>
              <Text
                style={{
                  color: COLORS.investment,
                  ...FONTS.h4Bold,
                  fontSize: 14.5,
                }}
              >
                {item.roi}
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.text,
                  { ...FONTS.h4Bold, fontSize: 14.5, fontWeight: "700" },
                ]}
              >
                Payout type
              </Text>
              <Text
                style={{
                  color: COLORS.investment,
                  ...FONTS.h4Bold,
                  fontSize: 14.5,
                }}
              >
                {item.payout}
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.text,
                  { ...FONTS.h4Bold, fontSize: 14.5, fontWeight: "700" },
                ]}
              >
                Offer ends
              </Text>
              <Text
                style={{
                  color: COLORS.investment,
                  ...FONTS.h4Bold,
                  fontSize: 14.5,
                }}
              >
                {item.endDate}
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }

  function renderButton() {
    return (
      <Button
        label={"START INVESTING"}
        labelStyle={{
          ...FONTS.h4Bold,
          color: COLORS.white,
        }}
        containerStyle={{
          backgroundColor: COLORS.investment,
          paddingVertical: 18,
          width: SIZES.width * 0.9,
          borderRadius: SIZES.radius,
          marginVertical: SIZES.padding2 * 5,
        }}
        onPress={() => setModalVisibility(true)}
      />
    );
  }

  function renderModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={modalVisibility}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: SIZES.height * 0.65,
              width: SIZES.width,
              padding: SIZES.base * 3,
              backgroundColor: COLORS.modal,
              borderRadius: SIZES.radius,
            }}
          >
            {/* modal header */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setModalVisibility(false)}
              >
                <ChevronLeft />
              </TouchableOpacity>

              <View>
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.h4Bold,
                    marginLeft: SIZES.padding2 * 2,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </View>
            {/* modal content */}
            <View>
              <View>
                <Text
                  style={[
                    styles.text,
                    { ...FONTS.h4Bold, fontSize: 14.5, fontWeight: "700" },
                  ]}
                >
                  Cost/unit
                </Text>
                <Text
                  style={{
                    color: COLORS.investment,
                    fontSize: 14.5,
                    ...FONTS.h4Bold,
                  }}
                >
                  {item.unit}
                </Text>
              </View>
              {/* modal input */}
              <View style={{ marginTop: 14 }}>
                <Text style={{ ...FONTS.body1bold, color: COLORS.white }}>
                  Amount to Invest
                </Text>
                <TextInput
                  style={{
                    borderColor: COLORS.white,
                    backgroundColor: COLORS.dark,
                    borderRadius: SIZES.padding / 2,
                    borderWidth: 1,
                    color: COLORS.white,
                    ...FONTS.body3,
                    padding: SIZES.padding2,
                  }}
                  placeholder="30,000"
                  placeholderTextColor="lightgrey"
                  selectionColor={COLORS.white}
                />
                <View style={{ height: SIZES.radius }} />
                <Text style={{ ...FONTS.body1bold, color: COLORS.white }}>
                  Fund
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderColor: COLORS.white,
                    backgroundColor: COLORS.dark,
                    borderRadius: SIZES.padding / 2,
                    borderWidth: 1,
                    color: COLORS.white,
                    ...FONTS.body3,
                    padding: SIZES.padding2,
                  }}
                >
                  <TextInput
                    style={{ color: COLORS.white, width: "90%" }}
                    placeholder="Select your funding source"
                    placeholderTextColor="lightgrey"
                    selectionColor={COLORS.white}
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setSourceModal(true)}
                  >
                    <ChevronDown />
                  </TouchableOpacity>
                </View>
              </View>

              {/* render agreement */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 40,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setToggle(!toggle)}
                >
                  {!toggle ? <ToggleOff /> : <ToggleOn />}
                </TouchableOpacity>
                <Text style={{ color: COLORS.white, marginLeft: 10 }}>
                  I understand that i can’t recieve my money{"\n"}(capital +
                  interest) until after the{"\n"}investment duration.
                </Text>
              </View>

              {/* render button */}
              <Button
                label={"DONE"}
                labelStyle={{
                  ...FONTS.h4Bold,
                  color: COLORS.white,
                }}
                containerStyle={{
                  backgroundColor: COLORS.investment,
                  paddingVertical: 18,
                  width: SIZES.width * 0.9,
                  borderRadius: SIZES.radius,
                  marginVertical: SIZES.base * 5,
                }}
                onPress={() => setModalVisibility(false)}
              />
            </View>
          </View>
        </View>
      </CustomModal>
    );
  }

  function renderSourceModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={sourceModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: SIZES.height * 0.4,
              width: SIZES.width,
              padding: SIZES.base * 3,
              backgroundColor: COLORS.modal,
              borderRadius: SIZES.radius,
            }}
          >
            {/* modal header */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSourceModal(false)}
              >
                <ChevronLeft />
              </TouchableOpacity>

              <View>
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.h4Bold,
                    marginLeft: SIZES.padding2 * 2,
                  }}
                >
                  Funding source
                </Text>
              </View>
            </View>

            {/* radio buttons */}
            <View>
              {sources.map((source) => (
                <TouchableOpacity
                  onPress={() => setSelected(source.id)}
                  activeOpacity={0.7}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 15,
                    borderBottomColor: COLORS.white,
                    borderBottomWidth: 0.5,
                  }}
                >
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: COLORS.white,
                      borderRadius: SIZES.padding,
                      height: 23,
                      width: 23,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: SIZES.padding2 * 2,
                    }}
                  >
                    {selected === source.id && (
                      <View
                        style={{
                          width: 17,
                          height: 17,
                          backgroundColor: COLORS.investment,
                          borderRadius: SIZES.padding,
                        }}
                      />
                    )}
                  </View>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.h4Bold,
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {source.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* render button */}
            <Button
              label={"DONE"}
              labelStyle={{
                ...FONTS.h4Bold,
                color: COLORS.white,
              }}
              containerStyle={{
                backgroundColor: COLORS.dark,
                paddingVertical: 18,
                width: SIZES.width * 0.9,
                borderRadius: SIZES.radius,
                marginVertical: SIZES.base * 5,
              }}
              onPress={() => setSourceModal(false)}
            />
          </View>
        </View>
      </CustomModal>
    );
  }
  return (
    <SafeAreaView style={{ paddingHorizontal: SIZES.padding2 }}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderImage()}
        {renderDescription()}
        {renderButton()}
      </ScrollView>
      {renderModal()}
      {renderSourceModal()}
    </SafeAreaView>
  );
};

export default ExploreInvestmentDetail;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: COLORS.white,
    ...FONTS.h4Bold,
    marginLeft: SIZES.padding * 4,
  },
  text: {
    color: COLORS.white,
  },
});
