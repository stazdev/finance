import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../../constants";

const Button = ({ label, onpress }) => {
  return (
    <TouchableOpacity
      style={{
        width: SIZES.base * 20,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base * 5,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onpress}
    >
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.fbody2,
          paddingVertical: 15,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
