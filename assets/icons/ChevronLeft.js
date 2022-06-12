import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants";

const ChevronLeft = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Svg
      width={33}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="m22 5.5-11 11 11 11"
        stroke={theme === "light" ? COLORS.dark : "#EFF2F5"}
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronLeft;
