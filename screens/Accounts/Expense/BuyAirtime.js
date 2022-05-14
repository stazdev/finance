import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES, accounts } from "../../../constants";
import { ChevronDown, ChevronLeft, Naira } from "../../../assets/icons";
import { Button, CustomModal } from "../../../components";

const providers = [
  {
    id: 1,
    name: "MTN",
    color: "yellow",
  },
  {
    id: 2,
    name: "GLO",
    color: "green",
  },
  {
    id: 3,
    name: "Airtel",
    color: "red",
  },
  {
    id: 4,
    name: "9 Mobile",
    color: COLORS.business,
  },
];

const recharges = [
  {
    id: 1,
    name: "Airtime",
  },
  {
    id: 2,
    name: "Data",
  },
];

const BuyAirtime = ({ navigation }) => {
  const [networkProvider, setNetworkProvider] = useState("Network Provider");
  const [topup, setTopup] = useState("Airtime");
  const [accountType, setAccountType] = useState("Main");

  const [accountTypeModal, setAccountTypeModal] = useState(false);
  const [airtimeModal, setAirtimeModal] = useState(false);
  const [networkProviderModal, setNetworkProviderModal] = useState(false);

  function renderHeader() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <ChevronLeft />
        </TouchableOpacity>

        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4Bold,
            fontWeight: "300",
            marginVertical: SIZES.padding2 * 2,
          }}
        >
          Buy Airtime and data easily
        </Text>
      </View>
    );
  }

  function renderContent() {
    return (
      <View>
        <View style={styles.box}>
          <Text style={styles.inputText}>{networkProvider}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setNetworkProviderModal(true)}
          >
            <ChevronDown />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Text style={styles.inputText}>{topup}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setAirtimeModal(true)}
          >
            <ChevronDown />
          </TouchableOpacity>
        </View>

        <View style={[styles.box, { paddingVertical: SIZES.base }]}>
          <TextInput
            style={[styles.inputText, { width: "100%" }]}
            placeholder="Mobile number"
            placeholderTextColor="lightgrey"
            selectionColor={COLORS.white}
          />
        </View>

        <View style={[styles.box, { paddingVertical: SIZES.base }]}>
          <TextInput
            style={[styles.inputText, { width: "100%" }]}
            placeholder="Enter Amount"
            placeholderTextColor="lightgrey"
            selectionColor={COLORS.white}
          />
        </View>

        <View style={styles.box}>
          <Text style={styles.inputText}>{accountType}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setAccountTypeModal(true)}
          >
            <ChevronDown />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <Button
        label={"Continue"}
        containerStyle={{
          backgroundColor: COLORS.expense,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding2 * 5,
          borderRadius: SIZES.padding,
        }}
      />
    );
  }

  function renderNetworkModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={networkProviderModal}>
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
              backgroundColor: COLORS.modal,
              borderRadius: SIZES.radius,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setNetworkProviderModal(false)}
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: COLORS.white,
                padding: SIZES.padding2 * 2,
              }}
            >
              <ChevronDown />
            </TouchableOpacity>

            <View
              style={{
                padding: SIZES.padding2 * 2,
              }}
            >
              {providers.map((provider) => (
                <TouchableOpacity
                  key={provider.id}
                  onPress={() => setNetworkProvider(provider.name)}
                >
                  <View
                    style={{
                      borderColor: provider.color,
                      borderWidth: 0.5,
                      borderRadius: SIZES.base / 2,
                      marginVertical: SIZES.base / 1.5,
                    }}
                  >
                    <Text style={styles.providerText}>{provider.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </CustomModal>
    );
  }

  function renderAirtimeModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={airtimeModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: SIZES.height * 0.3,
              width: SIZES.width,
              backgroundColor: COLORS.modal,
              borderRadius: SIZES.radius,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setAirtimeModal(false)}
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: COLORS.white,
                padding: SIZES.padding2 * 2,
              }}
            >
              <ChevronDown />
            </TouchableOpacity>

            <View
              style={{
                padding: SIZES.padding2 * 2,
              }}
            >
              {recharges.map((recharge) => (
                <TouchableOpacity
                  key={recharge.id}
                  onPress={() => setTopup(recharge.name)}
                >
                  <View
                    style={{
                      borderColor: COLORS.white,
                      borderWidth: 0.5,
                      borderRadius: SIZES.base / 2,
                      marginVertical: SIZES.base / 1.5,
                    }}
                  >
                    <Text style={styles.providerText}>{recharge.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </CustomModal>
    );
  }

  function renderAccountModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={accountTypeModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: SIZES.height * 0.7,
              width: SIZES.width,
              backgroundColor: COLORS.modal,
              borderRadius: SIZES.radius,
            }}
          >
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: COLORS.white,
                padding: SIZES.padding2 * 2,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setAccountTypeModal(false)}
              >
                <ChevronDown />
              </TouchableOpacity>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.fbody1,
                  marginLeft: SIZES.padding2 * 3,
                }}
              >
                Select account
              </Text>
            </View>

            <ScrollView
              style={{
                padding: SIZES.padding2 * 2,
              }}
            >
              {accounts.map((account) => (
                <TouchableOpacity
                  key={account.id}
                  onPress={() => setAccountType(account.description)}
                >
                  {account.id !== 1 ? (
                    <View
                      style={{
                        borderColor: COLORS.white,
                        borderWidth: 0.5,
                        borderRadius: SIZES.base / 2,
                        marginVertical: SIZES.base / 1.5,
                        flexDirection: "row",
                        alignItems: "center",
                        padding: SIZES.base,
                      }}
                    >
                      <View style={{ marginRight: SIZES.padding }}>
                        {account.icon}
                      </View>
                      <View>
                        <Text style={[styles.providerText, { padding: 0 }]}>
                          {account.description}
                        </Text>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Naira fill={COLORS.white} />
                          <Text
                            style={{
                              color: COLORS.white,
                              marginLeft: SIZES.base,
                              ...FONTS.fbody1,
                            }}
                          >
                            {account.balance}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ) : null}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </CustomModal>
    );
  }
  return (
    <SafeAreaView style={{ paddingHorizontal: SIZES.padding }}>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
      {renderNetworkModal()}
      {renderAirtimeModal()}
      {renderAccountModal()}
    </SafeAreaView>
  );
};

export default BuyAirtime;

const styles = StyleSheet.create({
  cardText: {
    color: COLORS.white,
    ...FONTS.fbody1,
    marginTop: SIZES.radius,
  },
  box: {
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
    marginBottom: SIZES.padding2 * 2,
  },
  inputText: { color: COLORS.white, ...FONTS.h4Bold },
  providerText: {
    color: COLORS.white,
    ...FONTS.h3Bold,
    textAlign: "center",
    padding: SIZES.base / 2,
  },
});
