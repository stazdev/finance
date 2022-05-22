import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LocalTransfer = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View>
      <Text style={{ color: item.color }}>LocalTransfer</Text>
    </View>
  );
};

export default LocalTransfer;

const styles = StyleSheet.create({});
