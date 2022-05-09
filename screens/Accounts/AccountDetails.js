import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";

import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import { Button } from "../../components";
import { Transaction } from "../../components";
import { SavingsGoal, InvestmentContent, ExpenseContent } from "../Accounts";
import {
  ChevronLeft,
  Info,
  Naira,
  ToggleOff,
  ToggleOn,
} from "../../assets/icons";

const AccountDetails = ({ navigation, route }) => {
  const { item } = route.params;
  const [modalVisibility, setModalVisibility] = useState(false);
  const [autosplit, setAutosplit] = useState(false);

  function renderHeader() {
    return (
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <ChevronLeft />
        </TouchableOpacity>
        <TouchableOpacity>
          <Info />
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Naira />
          <Text
            style={{
              color: item.color,
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
    return item.id === 1 || item.id === 2 || item.id === 6 ? (
      <View
        style={{
          marginBottom: SIZES.padding * 4,
          marginTop: SIZES.padding * 2,
        }}
      >
        {item.id === 1 && (
          <View>
            <Button
              label={!autosplit ? "Turn on autosplit" : "Autosplit is on"}
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
              onPress={() => setModalVisibility(true)}
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
              {!autosplit ? "Autosplit is off" : "Tab to disable"}
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
    ) : item.id === 3 ? (
      <View
        style={{
          marginBottom: 33,
        }}
      >
        <SavingsGoal item={item} />
      </View>
    ) : item.id === 4 ? (
      <View
        style={{
          marginBottom: 33,
        }}
      >
        <ExpenseContent item={item} />
      </View>
    ) : item.id === 5 ? (
      <View
        style={{
          marginBottom: 33,
        }}
      >
        <InvestmentContent item={item} />
      </View>
    ) : (
      ""
    );
  }

  // autosplit setting modal
  function renderModal() {
    return (
      <Modal
        animationIn="slideInUp"
        hasBackdrop={true}
        isVisible={modalVisibility}
        animationInTiming={1000}
        animationOutTiming={1000}
        style={{
          marginBottom: 0,
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisibility(false)}>
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
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setModalVisibility(false)}
              >
                <ChevronLeft />
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    color: COLORS.business,
                    ...FONTS.h3Bold,
                    marginVertical: SIZES.padding,
                  }}
                >
                  Autosplit
                </Text>
              </View>
              <View>
                <Text style={styles.modalText}>
                  You can turn ON/OFF the autosplit to your 5QM wallets
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: SIZES.padding * 2,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setAutosplit(!autosplit)}
                >
                  {!autosplit ? <ToggleOff /> : <ToggleOn />}
                </TouchableOpacity>
                <Text
                  style={[
                    styles.modalText,
                    {
                      marginLeft: SIZES.padding2 + 3,
                    },
                  ]}
                >
                  Turn on autosplit
                </Text>
              </View>

              <View>
                <Button
                  label={"Save Changes"}
                  labelStyle={{
                    paddingHorizontal: SIZES.padding2 * 5,
                    paddingVertical: SIZES.padding2,
                  }}
                  containerStyle={{
                    borderRadius: SIZES.padding,
                    marginTop: SIZES.padding * 3.5,
                  }}
                  onPress={() => {
                    setModalVisibility(false);
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderDetail()}
        {renderOtherDetails()}
      </ScrollView>
      {renderModal()}
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
  modalText: { color: COLORS.white, ...FONTS.fbody2 },
});
