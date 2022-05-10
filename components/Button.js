import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS, FONTS } from "../constants";

const Button = ({
  label,
  labelStyle,
  containerStyle,
  onPress,
  icon,
  iconF,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {icon}
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.fbody1,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
      {iconF}
    </TouchableOpacity>
  );
};

export default Button;
