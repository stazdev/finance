import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, FONTS } from "../constants";

import { Button } from "../components";
import { Naira } from "../assets/icons";

const listTab = [
  {
    id: 1,
    status: "All",
  },
  {
    id: 2,
    status: "Credit",
  },
  {
    id: 3,
    status: "Debit",
  },
];

const data = [
  {
    id: 1,
    narration: "Transfer to - Samuel Jackson ",
    time: "Date: wed, 15 sep 2022. 8:30 pm",
    status: "Debit",
    amount: 2500,
    action: "Money sent",
    beneficiary: "Samuel Jackson",
    bank: "First Bank",
    description: "Suya Money",
  },
  {
    id: 2,
    narration: "Omah Lay - GTbank ",
    time: "Date: wed, 15 sep 2022. 8:30 pm",
    status: "Credit",
    amount: 2500,
    action: "Money received",
    from: "Omah Lay",
    bank: "GTbank",
    description: "Suya Money",
  },
  {
    id: 3,
    narration: "Transfer to - Samuel Jackson ",
    time: "Date: wed, 15 sep 2022. 8:30 pm",
    status: "Debit",
    amount: 2500,
    action: "Money sent",
    beneficiary: "Samuel Jackson",
    bank: "First Bank",
    description: "Suya Money",
  },
  {
    id: 4,
    narration: "Omah Lay - GTbank ",
    time: "Date: wed, 15 sep 2022. 8:30 pm",
    status: "Credit",
    amount: 2500,
    action: "Money received",
    from: "Omah Lay",
    bank: "GTbank",
    description: "Suya Money",
  },
  {
    id: 5,
    narration: "Omah Lay - GTbank ",
    time: "Date: wed, 15 sep 2022. 8:30 pm",
    status: "Credit",
    amount: 2500,
    action: "Money received",
    from: "Omah Lay",
    bank: "GTbank",
    description: "Suya Money",
  },
];
const Transaction = ({ navigation }) => {
  const [status, setStatus] = useState("All");
  const [dataList, setDataList] = useState(data);
  const setStatusFilter = (status) => {
    if (status !== "All") {
      setDataList([...data.filter((e) => e.status === status)]);
    } else {
      setDataList(data);
    }
    setStatus(status);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={item.id} style={styles.itemContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  item.status === "Credit" ? "#28db5a" : "#db2828",
                marginRight: SIZES.padding2,
              },
            ]}
          ></View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.replace("Receipt", { item })}
          >
            <Text style={styles.text}>{item.narration}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          {/* <View style={{ width: 5, height: 5 }}>
            <Naira fill={"white"} />
          </View> */}
          <Text style={styles.amount}> {item.amount} </Text>
        </View>
      </View>
    );
  };

  function renderBtn() {
    return (
      <Button
        label="View More"
        labelStyle={{
          paddingVertical: SIZES.padding * 1.5,
          paddingHorizontal: SIZES.padding * 4.3,
        }}
        containerStyle={{
          backgroundColor: "black",
          borderColor: COLORS.white,
          borderRadius: SIZES.radius,
          borderWidth: 1,
          marginVertical: 56,
        }}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((list) => (
          <TouchableOpacity
            key={list.id}
            style={[styles.btnTab, status === list.status && styles.tabActive]}
            onPress={() => setStatusFilter(list.status)}
          >
            <Text style={styles.text}> {list.status} </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={dataList}
        keyExtractor={dataList.id}
        renderItem={renderItem}
      />
      {renderBtn()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: SIZES.padding * 1.4,
    borderWidth: 1,
    borderColor: COLORS.greyLight,
    borderRadius: SIZES.radius,
  },

  btnTab: {
    width: SIZES.width / 3.2,
    flexDirection: "row",
    padding: SIZES.padding,
    justifyContent: "center",
  },

  tabActive: {
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: SIZES.radius,
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    ...FONTS.fbody2,
    color: COLORS.white,
  },
  time: {
    ...FONTS.fbody2,
    fontSize: 10,
    lineHeight: 12.3,
    color: COLORS.white,
  },
  amount: {
    ...FONTS.fbody2,
    fontSize: 12.8,
    color: COLORS.white,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});

export default Transaction;
