import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context-store/context";
import { COLORS, FONTS, SIZES, accounts } from "../../../constants";
import { ChevronDown, ChevronLeft, Naira } from "../../../assets/icons";
import { Button, CustomModal } from "../../../components";

const InternalTransfer = ({ navigation, route }) => {
  const { item } = route.params;
  const [accountType, setAccountType] = useState("Select account");
  const [accountType1, setAccountType1] = useState("Choose wallet");
  const [accountTypeModal, setAccountTypeModal] = useState(false);
  const [accountTypeModal1, setAccountTypeModal1] = useState(false);
  const { theme } = useContext(ThemeContext);

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
                  onPress={() => {
                    setAccountType(account.description);
                    setAccountTypeModal(false);
                  }}
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

  function renderAccountModal1() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={accountTypeModal1}>
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
                onPress={() => setAccountTypeModal1(false)}
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
                  onPress={() => {
                    setAccountType1(account.description);
                    setAccountTypeModal1(false);
                  }}
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
    <SafeAreaView
      style={{
        paddingHorizontal: SIZES.padding,
        flex: 1,
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
      }}
    >
      <StatusBar backgroundColor={COLORS.dark} barStyle={"light-content"} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: SIZES.padding,
        }}
      >
        <ChevronLeft />
        <Text
          style={{
            color: theme === "light" ? COLORS.dark : COLORS.white,
            ...FONTS.h4Bold,
            marginLeft: SIZES.padding * 5,
          }}
        >
          Internal Transfer
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <View>
          <View>
            <Text
              style={[
                styles.type,
                { color: theme === "light" ? COLORS.dark : COLORS.white },
              ]}
            >
              Account to debit
            </Text>
            <TouchableOpacity
              onPress={() => setAccountTypeModal(true)}
              activeOpacity={0.7}
              style={[
                styles.card,
                { flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text style={styles.type}>{accountType}</Text>
              <ChevronDown />
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={[
                styles.type,
                { color: theme === "light" ? COLORS.dark : COLORS.white },
              ]}
            >
              To Wallet
            </Text>
            <TouchableOpacity
              onPress={() => setAccountTypeModal1(true)}
              activeOpacity={0.7}
              style={[
                styles.card,
                { flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text style={styles.type}>{accountType1}</Text>
              <ChevronDown />
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={[
                styles.type,
                { color: theme === "light" ? COLORS.dark : COLORS.white },
              ]}
            >
              Amount
            </Text>
            <View style={styles.card}>
              <TextInput
                placeholder="Amount"
                placeholderTextColor={COLORS.greyMedium}
                style={{
                  color: COLORS.greyMedium,
                  ...FONTS.fbody2,
                  fontSize: 13,
                  width: "100%",
                }}
              />
            </View>
          </View>

          <Button
            label={"CONTINUE"}
            containerStyle={{
              backgroundColor: item.id === 1 ? COLORS.business : item.color,
              paddingVertical: SIZES.padding2,
              width: SIZES.width * 0.9,
              borderRadius: SIZES.padding / 2,
              marginVertical: SIZES.padding * 4,
            }}
          />
        </View>
      </ScrollView>
      {renderAccountModal()}
      {renderAccountModal1()}
    </SafeAreaView>
  );
};

export default InternalTransfer;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.greyDark,
    marginBottom: SIZES.padding * 3,
    padding: SIZES.padding * 1.5,
    borderRadius: SIZES.padding,
  },
  title: {
    color: COLORS.white,
    ...FONTS.h4Bold,
    fontSize: 20,
  },
  description: {
    color: COLORS.greyLight,
    ...FONTS.fbody2,
    fontSize: 11,
  },
  type: {
    color: COLORS.white,
    ...FONTS.fbody2,
    fontSize: 13,
    marginBottom: SIZES.padding2 / 2,
  },
  providerText: {
    color: COLORS.white,
    ...FONTS.h3Bold,
    textAlign: "center",
    padding: SIZES.base / 2,
  },
});
