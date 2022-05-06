import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";

const ExpenseContent = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default ExpenseContent;

const styles = StyleSheet.create({});
